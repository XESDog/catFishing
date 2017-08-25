//开始页

let {init, getExportRoot, getLib} = require('../lib/exportRoot');
let {showLoading, hideLoading} = require('./util');

function startPage() {
    return init('A4C5B0564C414D5EAEE2FB4823327EB3', 'start', true)
        .then(({lib, exportRoot}) => new Promise(resolve =>
            exportRoot.on('startBtnClick', e => {
                if (exportRoot.parent) {
                    exportRoot.parent.removeChild(exportRoot);

                    // createjs.Sound.play('effect')

                    showLoading();

                    return resolve()
                }
            }, null, true))
        )
}


export {startPage}
