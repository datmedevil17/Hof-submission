import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from 'react';

function App() {
  const [data, setData] = useState("");

  const updateData = newData => {
    setData(newData);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/nftPage" element={<NFTPage />} />        
        <Route 
          path="/profile" 
          element={<Profile data={data} updateData={updateData} />} 
        />
        <Route path="/sellNFT" element={<SellNFT />} />             
      </Routes>
    </div>
  );
}

export default App;

