import React from 'react'
import Left from './Left/Left'
import Right from "./Right/Right";
import './body.scss'


function Body() {
    return (
        <div className="main-body" >
            <Left />
            <Right />
        </div>)
}

export default Body;