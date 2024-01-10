import React, { useContext } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
      <BrowserRouter>
          <Routes>
          <Route exact path="/home" element={user ? <Home /> : <Register/>}></Route>
          <Route exact path="/register" element={user ? <Navigate  to="/home" />: <Register />}></Route>
          <Route exact path="/login" element={user ? <Navigate  to="/home" />:<Login />}></Route>
          <Route exact path="/profile/:username" element={ <Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
