
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import MainContainer from './components/MainContainer';

function App() {
  return (
    <>
     <Navbar/>
     <LeftSidebar topic="Core Java"/>
     <MainContainer />
    </>
  );
}

export default App;
