// Componente raíz. Maneja el enrutamiento, la estructura básica de la aplicación y los contextos globales.
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/loginPage.jsx'
import NewsPage from './pages/NewsPage.jsx'
import Navbar from './components/navBar.jsx'
import Footer from './components/footer.jsx'
import Follow from './components/followMouse.jsx'

const App = () => {
  return (
    console.log('App'),
    <Router>
      <Navbar />
      <Footer />
      <Follow />
        <main>
          
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/LoginPage.jsx' element={<LoginPage />} />
          <Route path='/news' element={<NewsPage />} />
        </Routes>
      </main>
    </Router>
  )
  

  
  
  
  
  








}

export default App
