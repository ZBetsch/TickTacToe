import { useState } from 'react'

export function Square({onSquareClick, value}){
    const styles={
        background: `#fff`,
        border: `1px solid #999`,
        float: `left`,
        fontsize: `24px`,
        fontweight: `bold`,
        lineheight: `34px`,
        height: `34px`,
        marginright: `1px`,
        margintop: `1px`,
        padding: `0`,
        textalign: `center`,
        width: `34px`
    }

    return <button style={styles} onClick={onSquareClick}>{value}</button>
}