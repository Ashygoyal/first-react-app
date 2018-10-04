import React from 'react';

const Button = (props) => {
    // return <p>I belong to a custom React component. My age is {Math.floor(Math.random() * 30)}</p>
    return (
        <div>
            <button onClick={props.clickHandler}>{props.name}</button>
        </div>
    )
}

export default Button;