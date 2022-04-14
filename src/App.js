import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Sheard/Header/Header';
import Footer from './Pages/Sheard/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Serevices/Services';
import NotFunt from './Pages/NotFunt/NotFunt';
import Login from './Pages/Login/Login/Login';
import Registation from './Pages/Login/Registation/Registation';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/register' element={<Registation></Registation>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFunt></NotFunt>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
