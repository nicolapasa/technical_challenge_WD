
import './App.css'

import {  Route, Routes } from 'react-router-dom';
import Phone from './components/Phone';
import HomePage from './HomePage';
function App() {

  

  return (
    <>
      

        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<Phone />} />
        </Routes>
    </>
  )
}

export default App
