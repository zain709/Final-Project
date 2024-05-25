import React, { useEffect,useState } from "react";
import "./app.scss"

//Importing Sections
import Header from "./Sections/Header/header";
import Topbanner from "./Sections/Topbanner/topbanner";
import Objectives from "./Sections/Objectives/objectives";
import Projects from "./Sections/project/projects";
import Skills from "./Sections/Skills/Skills";
import Educaton from "./Sections/Education/educaton";
import Contact from "./Sections/Contact/contact";
import Footer from "./Sections/footer/footer";


function App() {

  let [headerclass,setheaderclass]=useState("headerdivection");

  useEffect(()=>{
    window.addEventListener('scroll', () => {
     
      if(window.scrollY > 15){
        setheaderclass("headerdivectionscroll")
      } 
      else
      {
        setheaderclass("headerdivection")
      }
   });
  })

  return (
    <div className="App">
    <div className={headerclass}>
    <Header/>
    </div>
    <Topbanner/>
    <Objectives/>
    <Projects/>
    <Skills/>
    <Educaton/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
