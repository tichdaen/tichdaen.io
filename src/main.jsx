import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/tichdaen.io'>
      <Header />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
