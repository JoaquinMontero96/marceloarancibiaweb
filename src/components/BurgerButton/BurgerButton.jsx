import React from 'react'
import './BurgerButton.css'

const BurgerButton = (props) => {
    return (
        <div onClick={props.handleClick} class={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerButton
