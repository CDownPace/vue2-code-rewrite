import observe from "./observe.js"

function observeArr(arr) {

    for (var i = 0; i < arr.length ; i++) {
        //观测数组
        observe(arr[i])
    }

}
export default observeArr