import { Routes, Route } from 'react-router-dom';
import Footer from './Shared/Footer';
import Home from './Layout/Home';
import Navbar from './Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
