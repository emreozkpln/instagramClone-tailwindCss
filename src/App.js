import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Profile from "./pages/Profile.js";
import { useState } from 'react'
import {Routes , Route } from "react-router-dom"


function App() {

  // const [isAuth , setIsAuth] = useState(false)

  //   function handleLogin(){
  //       setIsAuth(true)
  //   }

  //   function handleLogout(){
  //     setIsAuth(false)
  //   }

  return (
    <>
    {/* {isAuth ? <Home signOut={handleLogout}/> : <Login signIn={handleLogin}/>} */}
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
