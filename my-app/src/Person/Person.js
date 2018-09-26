import React from 'react';

const person = (props) => {
    // return <p>I belong to a custom React component. My age is {Math.floor(Math.random() * 30)}</p>
    return (
        <div>
            <p>
                My name is {props.name} and my age is {props.age}. 
                {props.children}
            </p>
        </div>
    )
}

export default person;