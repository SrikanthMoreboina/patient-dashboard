import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./index.css";
function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App;