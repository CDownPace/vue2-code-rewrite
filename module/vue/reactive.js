import observer from './observe'

function defineReactiveData(data, key, value) {
    observer(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('响应式数据获取', data, key, value)
            return value
        },
        set(newValue) {
            console.log('响应式数据设置', data, key)

            if (newValue === value) return

            data[key] = newValue
        }

    })
}


export default defineReactiveData