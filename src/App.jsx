import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Add from './pages/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/add'  element={<Add/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
