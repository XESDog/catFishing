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
        this.rate=1;
    }

    /**
     *
     * @param id
     * @param answer
     * @param errNum
     * @param rightNum
     */
    init(id, answer, errNum, rightNum) {
        this.id = id;
        this.useranswer = answer;
        this.answer = answer;
        this.times = errNum;
        this.rightnum = rightNum;
    }
}



export function postAnswer(postArr,testNum) {

    let data = {
        type: 'submitAnswer',
        data: {
            testAnswer: postArr,
            testNum: testNum
        }
    };
    //todo:测试答题数据
    window.answerData = data;
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


