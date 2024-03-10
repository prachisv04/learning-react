
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar'
// import LeftSidebar from './components/LeftSidebar'
import HomeContainer from './components/HomeContainer';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
   Routes ,
  Route
} from "react-router-dom";

function App() {
  const [mystyle,setStyle]= useState({
      backgroundColor:'',
  })
  const [Mode,SetMode] = useState('light');
  const [ModeIcon , setModeIcon] = useState("bi bi-moon-stars-fill");
   
   function switchMode(){
     if(Mode === 'light')
     {
      console.log("In light mode");
       SetMode("dark");
       setModeIcon("bi bi-sun-fill");
       setStyle({
        background: "#212529",
        color:"white"
       })
     }
     else{
       SetMode('light');
       setModeIcon("bi bi-moon-stars-fill");
       setStyle({
        background: "",
       })
     }
   }
   
  return (
    <Router>
    <div style={mystyle}>
    <Navbar mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} />
    <Routes>
          <Route exact path="/about"  element={<About mode={Mode} />}>
          </Route>
          <Route exact path="/" element={<HomeContainer getTopic="Core Java" mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} />}>    
          </Route>
        </Routes>
     
     {/* <LeftSidebar mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} /> */}
    </div>
    </Router>
  );
}
export default App;
