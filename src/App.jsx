import React from "react";

import { Header } from "./components/Header";

import Instagram from "../src/components/screens/Instagram";
import Facebook from "../src/components/screens/Facebook";
import TikTok from "../src/components/screens/Tiktok";
import Whatsapp from "../src/components/screens/Whatsapp";

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/tiktok" component={TikTok} />
        <Route path="/facebook" component={Facebook} />
        <Route path="/instagram" component={Instagram} />
        <Route path="/whatsapp" component={Whatsapp} />
      </div>
    </Router>
  );
}

export default App;
