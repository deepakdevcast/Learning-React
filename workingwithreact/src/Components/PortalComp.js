import React from 'react'
import ReactDOM from 'react-dom'
function PortalComp() {
    return ReactDOM.createPortal(
        <>
            <h2>React Portal</h2>
        </>,document.getElementById('react-portal')
    )
}

export default PortalComp
