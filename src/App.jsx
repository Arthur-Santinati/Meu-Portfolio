import React, { useEffect } from "react";
import { Router } from "./routes/Router";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div>
      <Router />     
    </div>
  )
}

export default App
