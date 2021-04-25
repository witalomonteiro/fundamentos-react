import './App.css'
import React from 'react'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import ComFilhos from './components/basicos/ComFilhos.jsx'
import Condicional from './components/basicos/Condicional.jsx'
import Repeticao from './components/basicos/Repeticao.jsx'
import Pai from './components/comunicacao/direta/Pai.jsx'
import Alto from './components/comunicacao/indireta/Alto.jsx'
import Input from './components/form/input.jsx'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import Card from './components/layout/Card.jsx'


export default (props) => (
    <div className="App">
        <h1>Fundamentos React JS</h1>

        <div className="Cards">
            <Card titulo="Execicio #01" color="#fe4a49">
                <Primeiro />
            </Card>

            <Card titulo="Execicio #02" color="#2ab7ca">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
            </Card>

            <Card titulo="Execicio #03" color="#011f4b">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="Execicio #04" color="#4a4e4d">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="Execicio #05" color="#851e3e">
                <Condicional numero={13}></Condicional>
            </Card>

            <Card titulo="Execicio #06" color="#ee4035">
                <Pai sobrenome="Barros"></Pai>
            </Card>

            <Card titulo="Execicio #07" color="#0392cf">
                <Alto/>
            </Card>

            <Card titulo="Execicio #08" color="#283655">
                <Input/>
            </Card>
            
            <Card titulo="Execicio #09" color="#4b3832">
                <Contador passo={10} valor={100}/>
            </Card>
            
            <Card titulo="Execicio #10" color="#854442">
                <Mega quantNum={8}/>
            </Card>
        </div>
    </div>
)