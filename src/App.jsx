import { useState } from "react";
import { TicTacToe } from "./TicTacToe/TicTacToe.jsx"
import { Link, Outlet } from "react-router";

export function AppLayout() {
    return(
        <>
            <h1>Game Hub</h1>
            <Link to="/game/TicTacToe">Tic Tac Toe</Link>
            <div style={{border: `1px solid red`}}>
                <Outlet/>
            </div>
            <footer>
                &copy; All rights are reserved to IT2049 2025
            </footer>
        </>

    )
}

// export default AppLayout;