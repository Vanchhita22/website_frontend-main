import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/footer/footer"; 
import Service from "./components/Services/Service";
import Other from "./components/Services/otherservice"; 
import Main from "./components/Header/main"; 
import Electrician from "./components/Services/Electrician"
import WashingMachine from "./components/Services/WashingM"
import AC from "./components/Services/AC"
import ReferigerationService from "./components/Services/refrigerator/components/ReferigerationService";
import PlumberService from "./components/Services/plumber/components/PlumberService";
import Aboutus from "./components/aboutus/components/Aboutus";
import Geyser from "./components/Services/Geyser";
import CCTV from "./components/Services/cctv";
import LEDTv from "./components/Services/LEDTv";
import Air from "./components/Services/Air-cooler";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element= {<><Main/><Service/><Other/><Footer /></>}/>
        <Route path="/electrician" element= {<Electrician />}/>
        <Route path="/washingm" element= {<WashingMachine />}/>
        <Route path="/ac" element= {<AC />}/>
        <Route path="/geyser" element= {<Geyser />}/>
        <Route path="/cctv" element= {<CCTV />}/>
        <Route path="/ledtv" element= {<LEDTv />}/>
        <Route path="/refrigerator" element={<ReferigerationService/>}/>
        <Route path="/plumber" element={<PlumberService/>}/>
        <Route path="/aircooler" element= {<Air />}/>
        <Route path="/about" element={<Aboutus/>}/>

      </Routes>
      
      
    </>
  );
};

export default App;
