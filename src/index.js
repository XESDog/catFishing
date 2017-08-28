let {startPage} = require('./js/startControl');
let {gamingPage, getPostArr} = require('./js/gamingControl');
let {endPage} = require('./js/endControl');
let {postAnswer, resubmitAnswer, answerResult} = require('./js/tophp');

let state = 0;//0：开始页面，1：游戏页面，2：游戏结束页面
let goldNum = 0;
let questions;


/**
 * 加载content.json
 * @return {Promise.<TResult>}
 */
function getContentJson() {
    return System.import(/*webpackChunkName:"content"*/ './content.json')
        .then(value => {
            questions = value;
            return value;
        })
        .catch(err => {
            throw err;
        })
}

window.resubmitAnswer = resubmitAnswer;
window.answerResult = answerResult;


window.addEventListener('message', function (e) {

    if (e.data.type === 'answerResult') {
        goldNum = e.data.data.goldnum;
        endPage(goldNum);
    }
    //php要求收答卷
    else if (e.data.type === 'resubmitAnswer') {


        if (state === 0) {
            //开始页面强制提交
            postAnswer([],questions.questions.length);

        } else if (state === 1) {

            let postArr = getPostArr();
            console.log(postArr);
            postAnswer(postArr,questions.questions.length)

        } else if (state === 2) {
            //已经提交了
        }
    }
});

getContentJson()
    .then(() => startPage())
    .then(() => {
        state = 1;
        return gamingPage(questions)
    })




