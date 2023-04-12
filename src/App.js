import logo from './logo.svg';
import './App.css';
import Mainpage from './pages/Mainpage/Mainpage';
import SignIn from './pages/Loginpage/Loginpage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import useLogin from './Component/useLogin';
import { useState,useEffect } from 'react';
import CreateTransactions from './pages/CreateTransactions/CreateTransactions';
import ViewTransactions from './pages/ViewTransactions/ViewTransactions';
function App() {
    
  // const login = useLogin()
  // console.log(login,"login");

  // const history = useNavigate();

  // useEffect(() => {
  //   if (login?.isLoggedIn) {
  //     history('/mainpage');
  //   } else {
  //     history('/');
  //   }
  // }, [login, history]);


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/create" element={<CreateTransactions />} />
        <Route path="/view" element={<ViewTransactions />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
