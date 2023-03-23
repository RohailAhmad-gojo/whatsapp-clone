import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Signin from "./components/Signin"
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signin' element={<Signin />} />
            <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
