let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
let lib;//导出供外部使用
let libName;//库名，eg:lib.gaming
let requireLoadAsset = false;//是否需要加载素材

export function init(id, name, isRequireLoad) {
    libName = name;
    requireLoadAsset = isRequireLoad;
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    let comp = AdobeAn.getComposition(id);

    lib = comp.getLibrary();


    return new Promise((resolve, reject) => {

        //使用引导线
        createjs.MotionGuidePlugin.install();
        //需要加载资源
        if (requireLoadAsset) {
            let loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function (evt) {
                handleFileLoad(evt, comp)
            });
            loader.addEventListener("complete", function (evt) {
                handleComplete(evt, comp, resolve)
            });
            loader.installPlugin(createjs.Sound);
            loader.loadManifest(lib.properties.manifest);
        } else {
            handleComplete({}, comp, resolve);
        }

    });
}

function handleFileLoad(evt, comp) {
    var images = comp.getImages();
    if (evt && (evt.item.type === "image")) {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp, resolve) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    lib = comp.getLibrary();
    let ss = comp.getSpriteSheet();

    if (requireLoadAsset) {
        let queue = evt.target;
        let ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                "images": [queue.getResult(ssMetadata[i].name)],
                "frames": ssMetadata[i].frames
            })
        }
    }
    exportRoot = new lib[libName]();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot);

    createjs.Touch.enable(stage);

    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }

    makeResponsive(true, 'both', true, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();


    resolve({lib, exportRoot});
}