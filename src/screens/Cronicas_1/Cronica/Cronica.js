
import React, { useEffect, useState } from 'react'

import classes from './Cronica.css'

const Cronica = (props) => {

    const [hide, setHide] = useState(``)

    useEffect(() => {
        if(props.hide){
            setHide(` ${classes.Hide}`)
        }
    })

    return (
        <div className={`${classes.Cronica} `+ hide} onClick={props.clicked}>
            <img src={require("../../../assets/cronica-"+props.image)} alt="covers" />
            <p>{props.title}</p>
        </div>
    )
}

export default Cronica;