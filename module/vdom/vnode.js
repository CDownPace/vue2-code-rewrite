function createElement(tag,attrs={},...child){
    console.log('child',child)
    return vnode(tag,attrs, child);
}
function createTextVnode(text){
    return vnode(undefined,undefined,undefined,text)
}

function vnode (tag,props,children,text) {
    return {
        tag,
        props,
        children,
        text
    }
}

export {
    createElement,
    createTextVnode
}