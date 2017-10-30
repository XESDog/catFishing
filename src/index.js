let {startPage} = require('./js/startControl');
let {gamingPage, getPostArr} = require('./js/gamingControl');
let {endPage} = require('./js/endControl');
let {postAnswer, resubmitAnswer, answerResult} = require('./js/tophp');

let state = 3;//0：开始页面，1：游戏页面，2：游戏结束页面
let goldNum = 0;
let questions;//题目信息
let total;//题目总数

const START = 0;
const GAMING = 1;
const END = 2;

const ANSWER_RESULT = 'answerResult';
const RESUBMIT_ANSWER = 'resubmitAnswer';


/**
 * 加载content.json
 * @return {Promise.<TResult>}
 */
function getContentJson() {
    return System.import(/*webpackChunkName:"content"*/ './content.json')
        .then(value => {
            questions = value;
            total = questions.questions.length;
            return value;
        })
        .catch(err => {
            throw err;
        })
}

window.debug = {};
window.debug.fps = true;
window.debug.resubmitAnswer = resubmitAnswer;
window.debug.answerResult = answerResult;

window.debug = null;


window.addEventListener('init_start', function () {
    hideLoading();
})
window.addEventListener('init_gaming', function () {
    hideLoading();
})
window.addEventListener('init_end', function () {
    hideLoading();
})

function hideLoading() {
    var loading = document.getElementsByClassName('page-loading')[0];
    loading.style.visibility = 'hidden';
}

function showLoading() {
    var loading = document.getElementsByClassName('page-loading')[0];
    loading.style.visibility = 'visible';
}

window.addEventListener('message', function (e) {

    //php反馈金币信息
    if (e.data.type === ANSWER_RESULT) {
        goldNum = e.data.data.goldnum;
        endPage(goldNum);
    }
    //php主动收卷
    else if (e.data.type === RESUBMIT_ANSWER) {

        if (state === START) {
            //开始页面强制提交
            postAnswer([], total);

        } else if (state === GAMING) {
            let postArr = getPostArr();
            postAnswer(postArr, total)

        } else if (state === END) {
            //已经提交了
        }
    }
});

getContentJson()
    .then(() => {
        showLoading();
        state = START;
        return startPage()
    })
    .then(() => {
        showLoading();
        state = GAMING;
        gamingPage(questions)
    });




