import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navbar/nav';
import { Footer } from './components/Footer/Footer';
import { RoutePath } from './components/route/RoutePath';

function App() {
  return (
    <>

    <div className="cont">
    <NavBar/>

      <div  style={{marginTop:"9rem"}}>
      <RoutePath/>

      </div>
    <Footer/>

    </div>
    </>
  );
}

export default App;
