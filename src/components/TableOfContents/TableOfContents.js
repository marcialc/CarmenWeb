import React from 'react';

import classes from './TableOfContents.css'

const TableOfContents = (props) => (
    <ul className={classes.TableOfContents}>
        <h2>Contenido</h2>
        {
            props.data.map( res => {
            return <li id={res.id} onClick={props.clicked}>{res.id}. {res.title}</li>
            })
        }
    </ul>
)

export default TableOfContents;