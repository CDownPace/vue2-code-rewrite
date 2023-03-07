function proxyData(vm, target, key) {

    Object.defineProperty(vm, key, {
        get() {
            return target[key]
        },
        set(newValue) {
            target[key] = newValue
        }
    })
}

export default proxyData