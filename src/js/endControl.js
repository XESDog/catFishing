import {postClose} from "./tophp";

let {init} = require('../lib/exportRoot');


export function endPage(goldNum) {
    return init('795489EE9AFE4327802B54F7C1F51894', 'end', true)
        .then(({lib: l, exportRoot: e}) => {

            e.stage.enableMouseOver(0);

            let tick=e.on('tick',()=>{
                window.dispatchEvent(new Event('init_end'));
                e.off('tick', tick);
            })

            e.goldNum = goldNum;

            let close = document.getElementsByClassName('close')[0];
            close.style.display = 'block'
            close.addEventListener('click', e => {
                postClose()
            })

            let timeout = document.getElementsByClassName('timeout')[0];
            let num=5;
            timeout.style.display='block';
            timeout.innerHTML=num+'s';
            let interval=setInterval(()=>{
                num--;

                if(num<=0){
                    postClose();
                    clearInterval(interval);
                }

                timeout.innerHTML=num+'s';
            },1000)

        })
}
