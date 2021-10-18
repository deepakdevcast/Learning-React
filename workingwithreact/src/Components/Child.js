import React from 'react'

function Child(props) {
    return (
        
        <div>
            <button onClick={()=>props.handle("child")}>click child change parent</button>
        </div>
    )
}

export default Child
