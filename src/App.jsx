import React from "react";
import {Header, Footer} from "./layout/index"
import { Outlet } from "react-router-dom";
const App = () => {
  return <div>
    <Header/>
     <Outlet/>
    <Footer/>
  </div>;
};

export default App;
