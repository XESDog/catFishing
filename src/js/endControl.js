let {init} = require('../lib/exportRoot');
let {showLoading, hideLoading} = require('./util');

function endPage(goldNum) {
    return init('795489EE9AFE4327802B54F7C1F51894', 'end', true)
        .then(({lib: l, exportRoot: e}) => {
            hideLoading()
            e.goldNum=goldNum;
        })
}

export {endPage}