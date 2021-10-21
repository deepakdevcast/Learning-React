import React from 'react'

function ErrorCheck(props) {
    if(props.name==="joker"){
        throw new Error("Error!!")
    }
    return (
        <div>
            {props.name}
        </div>
    )
}

export default ErrorCheck
