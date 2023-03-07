import proxyData from "./proxy"

function initState(vm) {
    initData(vm)
}

function initData(vm) {

    var data = vm.$option.data

    //这里想创建一个临时的_data去操作，保留用户原本的data
    data = vm._data = typeof data == 'function' ? data.call(vm) : data

    //组件和应用实例上的data 可能是object 或者 function

    for (var key in data) {

        proxyData(vm, data, key)

    }
}


export {
    initState
}