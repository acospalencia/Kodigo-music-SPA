
import { BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import { Home } from './views/home/Home'
import { Sesion } from './views/login/Sesion'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/sesion' element={<Sesion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
