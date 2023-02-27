// import './App.css';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import NFT from "./pages/NFT";
import Home from "./pages/Home";

export const App =() => {
  return (
    <div className="">
<Router>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/nft' element={<NFT />} />

      </Routes>
      </Router>
  
    </div>
  );
}

// export default App;
