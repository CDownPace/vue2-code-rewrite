import {parseHTMLToAST} from './astParser'
import {generate} from './generate'
function compileToRenderFunction (html) {
    console.log('this',this)
    const ast = parseHTMLToAST(html),
          code = generate(ast),
          render = new Function(`
          with(this){return ${code}}
          `)
    console.log('html',html)
    console.log('ast',ast)
    console.log('code000',code);
    console.log('render',render)
    return render;

}

export {
    compileToRenderFunction
}