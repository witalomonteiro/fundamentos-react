import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Condicional from './components/basicos/Condicional.jsx'
import Repeticao from './components/basicos/Repeticao.jsx'
import Card from './components/layout/Card.jsx'


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