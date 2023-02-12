import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateComp';
import Login from './Components/Login';
import ContactUs from './Components/contactus';

import Admin from './Components/Admin';

import Footer from './Components/footer'
import ShowPotrait from './Components/ListPotrait';
import ImageControle from './Components/UploadPotrait';
import HomePage from './Components/Home';
import React from 'react';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivateRoute />} >
            <Route path="/" element={<HomePage/>} />
            <Route path="/potrait" element={<ShowPotrait />} />
            <Route path="/download" element={<h1>Download Potraits</h1>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/logout" element={<h1>get logOut YourSelf</h1>} />
            
            
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/upload" element={<ImageControle/>}/>
        
          
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
