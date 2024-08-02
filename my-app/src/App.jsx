// import { useState } from 'react'
// import './App.css'
import Navbar from "./component/Navbar";
import Textform from './component/textform';

function App() {

  return (
    <>
   
<Navbar text="textutils" abouttext="about textutils" />
    <Textform email="Please enter a Email" password="Enter your Password" />
    </>
  )
}

export default App

