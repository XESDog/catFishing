let {init} = require('../lib/exportRoot');

export function endPage(goldNum) {
    return init('795489EE9AFE4327802B54F7C1F51894', 'end', true)
        .then(({lib: l, exportRoot: e}) => {
            window.dispatchEvent(new Event('init_end'))
            e.goldNum = goldNum;
        })
}
