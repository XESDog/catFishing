export class AnswerInfo {
    constructor() {
        this.id = 0;//第几题
        this.useranswer = -1;//学生答案
        this.answer = -1;//正确答案
        this.isright = 1;//1：完成，2：未完成
        this.times = 1;//答了几次？
        this.type = 0;//0：完成，1：多选，2：填空
        this.rightnum = 1;//填空题答对的个数
        this.wrongnum = 0;//填空题答错的个数
        this.rate = 1;
    }

    /**
     * @protected
     * @param id
     * @param answer    接受数组或者字符串
     * @param times
     * @param rightnum
     */
    _init(id, answer, times, rightnum) {
        this.id = id;
        this.useranswer = answer.toString();
        this.answer = answer.toString();
        this.times = times;
        this.rightnum = rightnum;
    }

    success(id, answer) {
        this._init(id, answer, 1, 1)
    }

    fail(id, answer, times) {
        this._init(id, answer, times, 0)
    }
}


/**
 * 提交
 * @param postArr
 * @param testNum
 */
export function postAnswer(postArr, testNum) {

    let data = {
        type: 'submitAnswer',
        data: {
            testAnswer: postArr,
            testNum: testNum
        }
    };
    window.parent.postMessage(data, '*');

}

/**
 * 关闭页面
 */
export function postClose(){
    let data = {type: 'close'};
    window.parent.postMessage(data, '*');
}


/**
 * 模拟后台返回数据
 */
export function resubmitAnswer() {
    let e = new Event('message');
    e.data = {
        type: 'resubmitAnswer'
    }
    window.dispatchEvent(e);
}

/**
 * 模拟后台返回数据
 */
export function answerResult() {
    let e = new Event('message');
    e.data = {
        type: 'answerResult',
        data: {
            goldnum: 3
        }
    }
    window.dispatchEvent(e);
}


