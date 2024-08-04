import './App.css';
import CategoryBar from './Components/HeroCategory/Categories';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/login'
import Register  from './Components/Register/register';
import Footer from './Components/Footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <CategoryBar></CategoryBar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
  </Router>
  </>
  );
}

export default App;
