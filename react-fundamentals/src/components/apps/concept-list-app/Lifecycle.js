import React from 'react';

const Lifecycle = ({lifecycle, toggle}) => {
    const done = (event) => {
        event.preventDefault();
        toggle(lifecycle);
        console.log("Props:", lifecycle, toggle);
    }
    console.log('lifecycle:', lifecycle)
    return (
        <li>
            {lifecycle.done ? (<del>{lifecycle.text}</del>) : (lifecycle.text)} <a href="" onClick={done}>✓</a>
        </li>
    );
}

export default Lifecycle