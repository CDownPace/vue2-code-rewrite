function proxyData(vm, target, key) {

    Object.defineProperty(vm, key, {
        get() {
            console.log('data 代理', target[key],key)
            return target[key]
        },
        set(newValue) {
            console.log('set--')
            target[key] = newValue
        }
    })
}

export default proxyData