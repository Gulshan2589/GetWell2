import React, { useEffect } from 'react';
import './App.css';
import { Navbar, Hero, Analtics, Dashboard, Contact, Register, Login, Facelog, Facereg} from './Component';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/' element={<ProtectedRoute><Hero /></ProtectedRoute>} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          {/* <Route path='/about' element={<ProtectedRoute><Analtics /></ProtectedRoute>} /> */}
          <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path='/facereg' element={<ProtectedRoute><Facereg /></ProtectedRoute>} />
          <Route path='/facelog' element={<ProtectedRoute><Facelog /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function ProtectedRoute(props) {
  const navigate = useNavigate();
  const storage = localStorage.getItem("HisabbookUser");
  useEffect(() => {
    if (!storage) {
      navigate("/login");
    }
  });
  return (
    props.children
  )
}

export default App;
