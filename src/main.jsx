import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import {AppLayout} from './App'
import { NotFound } from './NotFound'
import { TicTacToe } from './TicTacToe/TicTacToe'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<AppLayout/>}/>
          <Route path='/game'>
            <Route path='TicTacToe' element={<TicTacToe/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
