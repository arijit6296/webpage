import './App.css';
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
