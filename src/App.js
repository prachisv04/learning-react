
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import MainContainer from './components/MainContainer';
import { useState } from 'react';
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
    <div style={mystyle}>
     <Navbar mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} />
     <LeftSidebar mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} />
     <MainContainer getTopic="Core Java" mode={Mode} toggleMode = {switchMode} modeIcon ={ModeIcon} />
    </div>
  );
}
export default App;
