import React, { useState } from 'react'

export default (props) => {
    const [num, setNum] = useState(Array(props.quantNum).fill(0))

    function gerarNumNaoContido(Array) {
        const min = 1
        const max = 60
        const novoNum = parseInt(Math.random() * (max - min)) + min
        return Array.includes(novoNum) 
            ? gerarNumNaoContido(Array) : novoNum
    }

    function gerarNum() {
        const novoArray = Array(props.quantNum)
        .fill(0)
        .reduce((a, e) => {
            const novoNum = gerarNumNaoContido(a)
            return [...a, novoNum]
        }, [])
        .sort((a, b) => a - b)
    setNum(novoArray)
    }

    return (
        <>
            <h3>Mega Sena</h3>
            <h4>{num.join(' ')}</h4>
            <button onClick={gerarNum}>Gerar Números</button>
        </>
    )
}