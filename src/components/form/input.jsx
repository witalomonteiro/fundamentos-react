import React, { useState } from 'react'

export default (props) => {
    const [nome, setNome] = useState('Pedro')
    return (
        <>
            <h4>{nome}</h4>
            <input type="text" value={nome} 
                onChange={evento => setNome(evento.target.value)}
            ></input>
        </>
    )
}