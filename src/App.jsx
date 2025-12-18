import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from './compontents/Dashboard.jsx'

function App() {
  let name = "sdfg"
  let occ = "developer"
  
  return (
    <DataDisplay name={name} occu={occ} />

  )
}

export default App
