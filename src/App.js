import './App.css';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import Home from './pages/Home';
import Place from './pages/Place';

export const App =() => {
  return (
    <div className="">
<Router>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/place-to-stay' element={<Place />} />

      </Routes>
      </Router>
  
    </div>
  );
}

// export default App;
