function Vue(options) {
    this.init(options)
}

Vue.prototype.init =function(options){

    var vm = this
    vm.$option = options

    initState()
}




export default Vue