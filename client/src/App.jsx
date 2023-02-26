import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import AppPage from './pages/AppPage/AppPage'

import './App.css'

function App() {
  return (
    <div className="allContent">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/app' element={<AppPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
