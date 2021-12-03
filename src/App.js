import React from 'react'
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Empdetails from './Components/Empdetails';
import Empbirthday from './Components/Empbirthday';
import Error from './Components/Error'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/empdetails" element={<Empdetails/>} exact />
        <Route path="/empbirthday" element={<Empbirthday/>} exact />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
