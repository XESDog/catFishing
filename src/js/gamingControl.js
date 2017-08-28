let {init} = require('../lib/exportRoot');
let {showLoading, hideLoading} = require('./util');
let {AnswerInfo, postAnswer} = require('./tophp');

let lib, exportRoot;

let currentQuestionNum;
let totalQuestion;
let questions;
let fishPool = [];
let fishs = [];//当前题目中的鱼
let playing = false;


let coin;
let placeCoinPosition;
let placeFishHookPosition;
let cat;
let questionMark;//问号
let questionTxt;//题目
let fps;
let postArr = [];//给php发答题信息
let firstAnswer = true;//首次答题
let errNum = 0;//答错次数


const duration = 1000;
const NOT_FOUND_MC = new Error('指定元件不存在')
const LEFT = 'left';
const RIGHT = 'right';
const COMPLETE = 'complete';

const dispatcher = new createjs.EventDispatcher();


/**
 * NOTE:
 * fish对象上额外添加的动态属性
 *
 * @param ox,oy    记录原始位置
 * @param num      选项编号
 * @param direction    咬钩时鱼头朝向(left|right)
 *
 */


/**
 *
 * @param q 题目数据
 * @return {Promise.<TResult>}
 */
function gamingPage(q) {

    return init('1051F7115DE24BA0A3C40CFA4C9F9B5A', 'gaming', true)
        .then(({lib: l, exportRoot: e}) => new Promise(resolve => {
                lib = l;
                exportRoot = e;
                resolve();
            }
        ))
        //todo:
        .then(value => {
            hideLoading();

            questions=q.questions;

            totalQuestion = q.questions.length;
            currentQuestionNum = 0;
            questions = q.questions;

            coin = exportRoot['coin'];
            coin.ox = coin.x;//记录coin原始位置
            coin.oy = coin.y;

            cat = exportRoot['cat'];
            cat.framerate = 24;

            fps = exportRoot['fps'];
            fps.visible = false;

            window.debug = true;

            setInterval(() => {
                    if (!!window.debug) {
                        fps.visible = true;
                        fps.text = 'fps:' + parseInt(createjs.Ticker.getMeasuredFPS())
                    } else {
                        fps.visible = false;
                    }
                }
                , 200)

            questionMark = exportRoot['question']['questionMark'];
            questionTxt = exportRoot['question']['txt'];

            placeCoinPosition = {x: exportRoot['coinPlace'].x, y: exportRoot['coinPlace'].y};
            placeFishHookPosition = {x: exportRoot['placeFishHook'].x, y: exportRoot['placeFishHook'].y};

            generatorQuestion();

            // return new Promise(resolve => {
            //     dispatcher.addEventListener('questionComplete', () => {
            //         showLoading();
            //         return resolve();
            //     })
            // })
        })
}

/**
 * 出题
 */
function generatorQuestion() {
    let question = getQuestion(currentQuestionNum);
    questionTxt.text = question.question;
    questionMark.text = "?";

    firstAnswer = true;

    fishGotoScene(question.options)
        .then(() => wait(duration))
        //添加选项点击事件
        .then(() => {
            for (let fish of fishs) {
                fishClick(fish);
            }
        })
}

function fishClick(fish) {
    fish.clickEvent = fish.on('click', e => {
        if (playing) return;
        if (fish.direction === LEFT) {
            fish.txt.scaleX = -1;
            fish.scaleX = -1;
        }
        check(fish);
        e.preventDefault();
    })
}

/**
 * 鱼儿出场
 * @param options
 */
function fishGotoScene(options) {
    return new Promise(resolve => {

        for (let i = 0; i < options.length; i++) {
            let fish = getFishFromPool();
            let position = getPlaceHolderPosition(i);
            fish.txt.text = options[i];
            fish.num = i;
            fish.x = position.x;
            fish.alpha = 0.2
            fish.y = position.y + Math.random() * 150 + 50;
            fish.ox = position.x;
            fish.oy = position.y;
            fish.framerate = 24;
            //todo:需要延时执行，才能正确跳转
            let timeout = setTimeout(function () {
                fish.fish.gotoAndStop(i)
                clearTimeout(timeout);
            }, 1);
            //鱼头朝向
            if (position.x > placeFishHookPosition.x) {
                fish.direction = LEFT
            } else {
                fish.direction = RIGHT;
            }
            createjs.Tween.get(fish).to({x: position.x, y: position.y, alpha: 1}, duration);
            fishs.push(fish);
            exportRoot.addChild(fish);
        }
        return resolve();
    })
}

/**
 * 等待一个时间
 * @param time
 * @return {Promise}
 */
function wait(time) {
    return new Promise(resolve => {
        let timeout = setTimeout(() => {
            resolve();
            clearTimeout(timeout)
        }, time);
    });
}

function check(fish) {
    //避免动画播放过程中再次出发点击事件
    playing = true;

    let answer = getCurrentAnswer();
    if (fish.num === answer) {
        //第一次答对，数组中此前没有相关数据
        if (!postArr[currentQuestionNum]) {
            let answerInfo = new AnswerInfo();
            if (firstAnswer) {
                answerInfo.init(currentQuestionNum, answer.toString(), 1, 1)
            } else {
                answerInfo.init(currentQuestionNum, answer.toString(), errNum + 1, 0)
            }
            postArr.push(answerInfo)
        }
        errNum = 0;

        fishBite(fish)
            .then(value => catSuccess(value))
            .then(() => catchCoin())
            .then(() => wait(duration))
            //下一题
            .then(() => {

                let len = fishs.length;
                for (let i = 0; i < len; i++) {
                    destroyFish(fishs[0]);
                }
                cat.gotoAndStop('normal');

                currentQuestionNum++;

                if (currentQuestionNum < totalQuestion) {
                    generatorQuestion();
                } else {

                    let postArr = getPostArr();
                    postAnswer(postArr,totalQuestion);
                    showLoading();

                }
                playing = false;
            })
    } else {

        errNum++;

        fishBite(fish)
            .then(value => catFail(value))
            .then(() => wait(duration))
            .then(() => {
                fish.visible = true;
                fish.scaleX = 1;
                fish.txt.scaleX = 1;
                fish.x = fish.ox;
                fish.y = fish.oy + 200;
                fish.alpha = 0;
                //小猫保持钓鱼状态
                cat.gotoAndStop('normal');

                firstAnswer = false;

                //小鱼游回来
                createjs.Tween.get(fish).to({x: fish.ox, y: fish.oy, alpha: 1}, duration * .5)
                    .call(() => {
                        playing = false;
                    });
            })
    }
}

function fishBite(fish) {
    return new Promise(resolve => {
        createjs.Tween.get(fish).to({x: placeFishHookPosition.x, y: placeFishHookPosition.y}, duration)
            .call(() => {
                fish.visible = false;
                resolve(fish);
            })
    })
}

function catSuccess(fish) {
    cat.gotoAndStop('success')
    cat.cat_success.gotoAndPlay(1);
    cat.cat_success.fish.gotoAndStop(fish.fish.currentFrame);
    return new Promise(resolve => {
        cat.on(COMPLETE, e => {
            resolve();
            createjs.Sound.play('effect');
        }, null, true)
    })
}

function catchCoin() {
    let answerValue = getCurrentAnswerValue();
    coin.visible = true;
    coin.txt.text = answerValue;
    return new Promise(resolve => {
        createjs.Tween.get(coin).to({x: placeCoinPosition.x, y: placeCoinPosition.y}, duration * 0.5).call(() => {
            coin.visible = false;
            coin.x = coin.ox;
            coin.y = coin.oy;

            questionMark.text = answerValue;

            resolve()
        })
    })

}

function catFail(fish) {
    cat.gotoAndStop('fail')
    cat.cat_fail.gotoAndPlay(1);
    cat.cat_fail.fish.gotoAndStop(fish.fish.currentFrame)
    return new Promise(resolve => {
        cat.on(COMPLETE, e => {
            resolve();
        }, null, true)
    })
}

function destroyFish(fish) {
    if (fish.parent) fish.parent.removeChild(fish)

    let index = fishs.indexOf(fish)
    if (index !== -1) {
        fishs.splice(index, 1)
    }
    fish.scaleX = 1;
    fish.txt.scaleX = 1;
    fish.visible = true;
    fish.alpha = 1;
    fish.off('click', fish.clickEvent);
    backFishToPool(fish);
}

function getCurrentAnswer() {
    return questions[currentQuestionNum].answer;
}

/**
 * 获取题目信息
 * @param questionNum
 * @return {*}
 */
function getQuestion(questionNum) {
    return questions[questionNum]
}

/**
 * 每个鱼的位置
 * @param num
 * @return {{x, y}}
 */
function getPlaceHolderPosition(num) {
    let placeHolder = exportRoot['place' + num];
    if (!placeHolder) throw NOT_FOUND_MC
    return {
        x: placeHolder.x,
        y: placeHolder.y
    }
}

function getCurrentAnswerValue() {
    let answerNum = getCurrentAnswer();
    let question = getQuestion(currentQuestionNum)
    return question.options[answerNum];
}

function getFishFromPool() {
    if (fishPool.length > 0) {
        return fishPool.splice(0, 1)[0]
    } else {
        return new lib.option();
    }
}

function backFishToPool(fish) {
    fishPool.push(fish);
}


export function getPostArr() {
    return postArr;
}


export {gamingPage}