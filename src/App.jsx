
import { BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import { Home } from './views/home/Home'
import { LogIn } from './views/login/LogIn'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
