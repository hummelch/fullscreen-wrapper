export interface FullscreenWrapperObject {
    element: HTMLElement
}
export default function (option: FullscreenWrapperObject) {

    if(typeof option.element === 'undefined') {
        console.log('FullscreenWrapper: element property is required!');
        return;
    }
    let element = option.element;


    let getOrientation = () => {
        if (window.innerWidth >= window.innerHeight) {
            return "LANDSCAPE"
        }
        return "PORTRAIT"
    };

    let setCurrentDemoHTML = () => {
        document.querySelector('.innerWidth').innerHTML = window.innerWidth.toString();
        document.querySelector('.innerHeight').innerHTML = window.innerHeight.toString();
        document.querySelector('.screenWidth').innerHTML = getRealScreenSize().width.toString();
        document.querySelector('.screenHeight').innerHTML = getRealScreenSize().height.toString();
    };

    let calcWrapperScale = () => {
        let elementHeight = element.clientHeight;
        let elementWidth = element.clientWidth;
        let minScale = Math.min( getRealScreenSize().height / elementHeight, getRealScreenSize().width / elementWidth);
        element.style.transform = 'scale(' + parseFloat((minScale).toFixed(3)) + ')';
    };

    let getRealScreenSize = () => {
       let width;
       let height;
        // if (Platform.isDesktopDevice) {
        //     return f.getInnerScreenSize()
        // }
        if (getOrientation() === "PORTRAIT") {
            width = Math.min(window.screen.width, window.screen.height);
            height = Math.max(window.screen.width, window.screen.height)
        } else {
            if (getOrientation() === "LANDSCAPE") {
                width = Math.max(window.screen.width, window.screen.height);
                height = Math.min(window.screen.width, window.screen.height)
            }
        }
        return {
            width: width,
            height: height
        }
    };

    let init = () => {
        setCurrentDemoHTML();
        calcWrapperScale();
        window.addEventListener('resize', () => {
            setCurrentDemoHTML();
            calcWrapperScale();
        });
    };
    init();
}