//开始页

let {init, getExportRoot, getLib} = require('../lib/exportRoot');

export function startPage() {
    return init('A4C5B0564C414D5EAEE2FB4823327EB3', 'start', true)
        .then(({lib, exportRoot}) => new Promise(resolve => {
                window.dispatchEvent(new Event('init_start'))
                exportRoot.on('startBtnClick', e => {
                    if (exportRoot.parent) {
                        exportRoot.parent.removeChild(exportRoot);
                        return resolve()
                    }
                }, null, true)
            })
        )
}

