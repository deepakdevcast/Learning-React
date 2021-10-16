import React from 'react';
export const Welcome = (props) => {

    return (
        <div>
        <h1>Welcome {props.name}</h1>
        {props.children}
        </div>
    );
}