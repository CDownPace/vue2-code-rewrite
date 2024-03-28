import proxyData from "./proxy"
import observe from "./observe"

function initState(vm) {
    initData(vm)
}

function initData(vm) {

    var data = vm.$options.data

    //1.这里想创建一个临时的_data去操作，保留用户原本的data
    data = vm._data = typeof data == 'function' ? data.call(vm) : data

    //2.组件和应用实例上的data 可能是object 或者 function


    for (var key in data) {
        //2.1数据响应式
        proxyData(vm, data, key)
    }

    //3.对data 及其内部进行观察
    observe(vm._data)
}


export {
    initState
}