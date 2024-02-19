
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './Landingpage/landingpage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register/register';

import Login from './Login/login';
import Footer from './Footer/footer';
import Contact from './Contact/contact';
import NavbarRes from './Navbar/navbar';
import Employee from './EmployeDetails/employee';


function App() {
  return (
    <div className="App">
      <NavbarRes/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact-details' element={<Contact/>}/>
          <Route path='/employee-details' element={<Employee/>}/>
        </Routes>
      
      
       <Footer/>
       
    </div>
  );
}

export default App;
