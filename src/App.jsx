import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Read from './components/Read'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <div>
     <Navbar/>
     <Routes>
     <Route path='/'element={<Read/>}></Route>
     <Route path='/add-product'element={<Add/>}></Route>
     </Routes>
     
     </div>
    </>
  )
}

export default App
