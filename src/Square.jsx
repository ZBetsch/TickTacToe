import { useState } from 'react'

export function Square({onSquareClick, value}){
    const styles={
        background: `#121213`,
        color:`#f5f5f5`,
        border: `3px solid rgb(188, 188, 188)`,
        float: `left`,
        fontSize: `24px`,
        fontWeight: `bold`,
        lineHeight: `34px`,
        height: `60px`,
        textalign: `center`,
        width: `60px`
    }

    return <button style={styles} onClick={onSquareClick}>{value}</button>
}