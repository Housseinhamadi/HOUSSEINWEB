import React from 'react';
import ReactDOM from 'react-dom';
import './MainBody.css'
import Projects from "./Projects"
import Skills from "./Skills"
import WhoAmI from "./WhoAmI"
import Houssein from "./houssein.jpg"
import Paris8 from "./Images/Paris8.png"
import LU from "./Images/LU.jpeg"


class MainBody extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid bg-1 text-center">
          <div class="row">
            <div class="col-sm-6">
              <h1>HOUSSEIN HAMADI</h1>
              <img src={Houssein} class="img-circle" width="250px" height="250px" /><br /><br />
              <h3>Codage est la vie</h3><hr width="50%" />
              <a href="https://housseincv.000webhostapp.com/HousseinHamadiCV.pdf" target="blacked" class="doCV" download>Pour Télécharger mon CV </a><hr width="50%" />
            </div>
            <div class="col-sm-6 text-left vertical" >
              <br /><br />
              <h3>Université Paris 8 | Vincennes - Saint-Denis</h3>
              <p><img src={Paris8} width="100px" height="100px" align="left" class="marginRigh" /> <b class="biggertext"> M2 Ingénierie en intelligence artificielle<br /> </b></p><br /><br />
              <hr width="100%" />
              <h3>Université Paris 8 | Vincennes - Saint-Denis</h3>
              <p><img src={Paris8} width="100px" height="100px" align="left" class="marginRigh" /> <b class="biggertext"> Master 1 Informatique tronc commun<br /> </b></p><br /><br />
              <hr width="100%" />
              <h3>Université Libanaise</h3>
              <p><img src={LU} width="100px" height="100px" align="left" class="marginRigh" /> <b class="biggertext"> licence informatique à l'universite libanaise </b></p><br /><br /><br /><br />
            </div>
          </div>
        </div>
        <WhoAmI />
        <Projects />
        <Skills />
      </div>
    )
  }
}

export default MainBody;
