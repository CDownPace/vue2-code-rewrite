import Observer from './observer.js'

function observer(data) {


    if (typeof data !== 'object' || data === null) return

    return new Observer(data)
}

export default observer