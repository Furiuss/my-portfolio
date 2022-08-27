import React from "react";

import { About, Footer, Header, Skills, Testemonial, Work } from "./container";
import {Navbar} from './components'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testemonial />
      <Footer />
    </div>
  );
}

export default App;
