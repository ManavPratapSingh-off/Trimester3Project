import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route 
          path='/'
          element={<Home/>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
