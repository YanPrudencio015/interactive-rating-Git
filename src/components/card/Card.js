import React, { useContext } from "react";
import './card.css'
import Front from './front/Front';
import Back from './back/Back'


import {switchCardContext} from '../../context/CardContext'

function Card(props){

    const[canTurn, setCanTurn] = useContext(switchCardContext)
    return(
        <div className={canTurn === true ? "cardTurned":"card"}>
            <Front/>
            <Back/>
        </div>
    )
}



export default Card