import React from 'react'
import './stylec.css'
import styles from './style.module.css'
const inlinestyle = {
    fontSize: '25px',
    color: 'red'
}
function Styling(props) {
    let primary = props.primary ? "purp":""
    return (
        <div>
            {/* 1. StyleSheet */}
            <h2 className={`${primary} xl`}>Stylesheet</h2>
            {/* 2. Inline */}
            <h2 style={inlinestyle}>Inline</h2>
            {/* 3. Css Module */}
            <h2 className={styles.warning}>module text</h2>
        </div>
    )
}

export default Styling
