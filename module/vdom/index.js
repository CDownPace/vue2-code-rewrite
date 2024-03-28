import {createElement,createTextVnode} from './vnode'
function renderMixin(Vue){
    console.log('vdom')
    Vue.prototype._c = function () {
        return createElement(...arguments);
    }
    Vue.prototype._s = function (value) {
        if(value ===null) return;
        console.log('type',value)
        return typeof value ==='object'?JSON.stringify(value):value;
    }
    Vue.prototype._v = function (text) {
        return createTextVnode(text);
    }
    Vue.prototype._render = function(){
        console.log('cck')
        const vm = this,
            render = vm.$options.render;
            vnode = render.call(vm);

            console.log('render2',vm.$options)

        return vnode;
    }
}
export {
    renderMixin
}