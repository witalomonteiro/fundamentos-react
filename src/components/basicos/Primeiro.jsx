import React from 'react'

/** 
 * Função Anônima -> export default function () { return ( <code> ) } 
 * Arrow Function I -> export default () => { return ( <code> )}
 * Arrow Function II -> export default () => <code>
*/

function Primeiro() {
    return (
        /** 
         * Para retornar mais de um elemento React, precisamos usar as tags: 
         * Forma I -> <div></div>
         * Forma II -> <></>
         * Forma III -> <React.Fragment></React.Fragment>
        */
        <>
            <h1>Primeiro Componente</h1>
            <h2>Exemplo de um componente React</h2>
        </>
    )
}

export default Primeiro