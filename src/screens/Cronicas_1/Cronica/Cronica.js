import Cronicas from "../../Cronicas"
import React from 'react'

import './Cronica.css'

const Cronica = (props) => {
    return (
        <div className="Cronica" onClick={props.clicked}>
            <img src={require("../../../assets/cronica-"+props.image)} alt="covers" />
            <p>{props.title}</p>
        </div>
    )
}

export default Cronica;