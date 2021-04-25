import './App.css'
import React from 'react'
import Primeiro from './components/Primeiro.jsx'
import ComParametro from './components/ComParametro.jsx'
import ComFilhos from './components/ComFilhos.jsx'
import Condicional from './components/Condicional.jsx'
import Card from './components/layout/Card.jsx'
import Repeticao from './components/Repeticao.jsx'

export default (props) => (
    <div className="App">

        <Card titulo="Execicio #01">
            <Primeiro />
        </Card>

        <Card titulo="Execicio #02">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="Execicio #03">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Execicio #04">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="Execicio #05">
            <Condicional numero={13}></Condicional>
        </Card>

    </div>
)