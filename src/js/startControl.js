//开始页

let {init, getExportRoot, getLib} = require('../lib/exportRoot');

export function startPage() {
    return init('ECC92C0561AF43C39DBFF4FCD20F0C42', 'start', true)
        .then(({lib, exportRoot}) => new Promise(resolve => {
                let tick = exportRoot.on('tick', () => {
                    window.dispatchEvent(new Event('init_start'));
                    exportRoot.off('tick', tick);
                })
                exportRoot.on('startBtnClick', e => {
                    exportRoot.stage.enableMouseOver(0);
                    if (exportRoot.parent) {
                        exportRoot.removeAllChildren();
                        exportRoot.parent.removeChild(exportRoot);
                        return resolve()
                    }
                }, null, true)
            })
        )
}

