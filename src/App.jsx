import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Addstudent from './Components/Addstudent/Addstudent';
import Studentlist from './Components/Studentlist/Studentlist'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addstudent' element={<Addstudent />}/>
        <Route path='/studentlist' element={<Studentlist/>} />
      </Routes>
    </>
  )
}

export default App
