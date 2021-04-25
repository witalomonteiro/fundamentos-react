import React, { useState } from 'react'
import Baixo from './Baixo'

export default (props) => {
    const [texto, setTexto] = useState('Pausado')
    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setTexto(texto)
        setNum(valorGerado)
    }

    return (
        <>
            <h4>{texto}: {num}</h4>
            <Baixo onClicar={quandoClicar}></Baixo>
        </>
    )
}
