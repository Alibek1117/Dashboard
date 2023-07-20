import Mainbar from "./containers/Mainbar";
import Saidbar from "./containers/Saidbar";

import "./assets/styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Overview from "./containers/Overview";
import MainContent from "./containers/MainContent";
import { useState } from "react";
import Ideas from "./containers/Ideas";
import Contactss from "./containers/Contactss";
import Agents from "./containers/Agents";
import Articless from "./containers/Articless";
import Settings from "./containers/Settings";
import Subscription from "./containers/Subscription";

function App() {
  const [navName, setNavName] = useState('salom');
  return (
    <div className="App container">
      <BrowserRouter>
        <Saidbar navName={navName} setNavName={setNavName}/>
        <div className="mainbar">
          <Navbar navName={navName} />
          <Routes>
            <Route path="/" element={<Overview />}/>
            <Route path="/tickets" element={<MainContent />}/>   
            <Route path="/ideas" element={<Ideas />}/>   
            <Route path="/contacts" element={<Contactss />}/>   
            <Route path="/agents" element={<Agents />}/>   
            <Route path="/articles" element={<Articless />}/>   
            <Route path="/settings" element={<Settings />}/>   
            <Route path="/subscription" element={<Subscription />}/>   
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
