export interface FullscreenWrapperObject {
    element: HTMLElement
}
export default function (option: FullscreenWrapperObject) {

    if(typeof option.element === 'undefined') {
        console.log('FullscreenWrapper: element property is required!');
        return;
    }
    let element = option.element;

    let init = () => {
        console.log(element);
    };
    init();
}