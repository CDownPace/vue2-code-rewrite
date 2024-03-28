import {patch} from '../vdom/patch'

function mountComponent (vm){
console.log('aak')
    //vnode
    vm._update(vm._render())
}

function lifeCycleMinxin(Vue){
    console.log('bbk')
    Vue.prototype._update = function(vnode) {
        const vm = this;
        patch(vm.$el,vnode);
    }
}
export {
    mountComponent,
    lifeCycleMinxin
}