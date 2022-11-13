import './App.css';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
// import Navbar from './pages/Navbar';
import Home from './pages/Home';

export const App =() => {
  return (
    <div className="">

<Router>
      <Routes>

      <Route path='/' element={<Home />} />
      {/* <Route path='/contact' element={<Contact />} /> */}
      {/* <Route path='/contact' element={< />} /> */}

      </Routes>
      </Router>


  
    </div>
  );
}

// export default App;
