import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Details from './components/Details/Details.js';
import Footer from './components/Footer/Footer.js';
import Liste from './components/Liste/Liste.js';
import Error404 from './components/Error404/Error404.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/artisans' element={<Liste/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
