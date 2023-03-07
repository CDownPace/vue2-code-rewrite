import {initState} from './init'

function Vue(options) {

   
    this.init(options)
}

Vue.prototype.init =function(options){

    var vm = this
    vm.$option = options
   
    initState(vm)
}




export default Vue