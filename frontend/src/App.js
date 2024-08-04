// App.js
import './App.css';
import CategoryBar from './Components/HeroCategory/Categories';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Main App Component
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
      <CategoryBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App;
