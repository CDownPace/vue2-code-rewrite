import {initState} from './init'
import {compileToRenderFunction} from '../compiler'
import {lifeCycleMinxin,mountComponent} from './lifecycle'
import {renderMixin} from '../vdom/index'

function Vue(options) {

   
    this.init(options)
}

Vue.prototype.init =function(options){
    console.log('options',options)

    console.log('vm2.$options',this)
    var vm = this
    vm.$options = options
   console.log('vm.$options',vm)
    initState(vm)

    if(vm.$options.el) {
        vm.$mount(vm.$options.el);
    }
}

lifeCycleMinxin(Vue)
renderMixin(Vue)
Vue.prototype.$mount = function(el) {
    const vm = this,
          options = vm.$options;
    
    el= document.querySelector(el),
    vm.$el = el;
    if(!options.render) {
        let template = options.template;

        if(!template&& el){
            template = el.outerHTML
        }

        const render = compileToRenderFunction(template);
        //编译NST树，render
        options.render = render;
    }
    console.log('renderrenderrenderrender',options.render)

    mountComponent(vm);

}




export default Vue