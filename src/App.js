import './App.css';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import Home from './pages/Home';
import Place from './pages/Place';
// import Testlogin from './pages/Testlogin';
import Login from './pages/Login';

export const App =() => {
  return (
    <div className="">
<Router>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/place-to-stay' element={<Place />} />
      <Route path='/login' element={<Login />} />

      </Routes>
      </Router>
  
    </div>
  );
}

// export default App;
