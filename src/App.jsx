
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber'
import Footer from './components/Footer'

function App() {

  return (
    
    <>
    <Navber/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
