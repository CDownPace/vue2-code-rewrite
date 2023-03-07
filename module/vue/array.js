import { ARR_METHODS } from './config'
import observeArr from './observeArr';

//获取整个Array原型的引用
var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

//把重写的方法遍历，
ARR_METHODS.map(function (m) {
    arrMethods[m] = function () {
        //完成原来的功能
        var arg = Array.prototype.slice.call(arguments),
            rt = originArrMethods[m].apply(this, arg)


        //把 新增的参数 筛选出来
        var neArr;
        switch (m) {
            case 'push':

            case 'unshift':
                neArr = args

            case 'splice':
                neArr = args.slice(2)
                break;
            default:
                break;
        }

        neArr && observeArr(neArr)

        return rt

    }
})

export {
    arrMethods
}