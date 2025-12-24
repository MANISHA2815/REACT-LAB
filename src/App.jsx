import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from './compontents/Dashboard.jsx'
import Dashboard from './compontents/Dashboard.jsx'
import Counter from './compontents/Counter.jsx'
import Table from './compontents/Table.jsx'

function App() {
  const [name,setName] = useState ("manisha")
  const [occ,setOcc] = useState("developer")

  function nameChange(){
    setName("abii")
    console.log(name)
  }
  return (
    //<Dashboard name={name} occ={occ} nameChange={nameChange}/>
    <Table/>
  )
}

export default App
