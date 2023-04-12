import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/Mainpage/Mainpage';
import SignIn from './pages/Loginpage/Loginpage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import useLogin from './Component/useLogin';
import { useState,useEffect } from 'react';
import CreateTransactions from './pages/CreateTransactions/CreateTransactions';
import ViewTransactions from './pages/ViewTransactions/ViewTransactions';
import Profile from './pages/profile/Profile';
import MulitpleForm from './pages/MulitpleForm/MulitpleForm';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/create" element={<CreateTransactions />} />
        <Route path="/view" element={<ViewTransactions />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/mutipleform' element={<MulitpleForm/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
