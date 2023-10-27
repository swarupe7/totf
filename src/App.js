import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    
    <Route exact  path="/login" element={<Login />}/>
    <Route exact path="/signup" element={<Register />}/>

  
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
