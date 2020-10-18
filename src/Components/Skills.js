import React from 'react';
import ReactDOM from 'react-dom';
import './MainBody.css'
import './Skills.css'

import C from './Images/C.png'
import Java from './Images/java.png'
import Python from './Images/python.jpg'
import tableau from './Images/tableau.jpg'
import Assembly from './Images/assembly.png'
import ReactN from './Images/react.png'
import Php from './Images/php.png'
import Asp from './Images/asp.png'
import Jquery from './Images/jquery.png'
import Html from './Images/html.jpg'
import Css from './Images/css.png'
import unity from './Images/unity.jpg'
import cordova from './Images/cordova.jpg'
import Js from './Images/js.png'
import VSC from './Images/VSC.png'
import Prolog from './Images/prolog.png'
import Git from './Images/git.png'
import Android from './Images/android.png'
import Mysql from './Images/mysql.png'
import Arabic from './Images/arabic.png'
import Francais from './Images/fr.png'
import English from './Images/english.png'

import R from './Images/R.png'




class Skills extends React.Component {
  render() {
    return (
      <div id="skills" class="container-fluid text-center bg-grey">
        <h2>Compétences</h2>
        <br />
        <h3>Languages</h3><hr width="40%" class="new5" />
        <div class="row">
          <div class="col-sm-4">
            <img src={C} width="80px" height="80px" />
            <h4>C Langauge</h4>
            <p></p>
          </div>
          <div class="col-sm-4">
            <img src={Java} width="80px" height="80px" />
            <h4>Java</h4>
            <p></p>
          </div>
          <div class="col-sm-4">
            <img src={Assembly} width="80px" height="80px" />
            <h4>Assembly (MIPS)</h4>
          </div>
        </div>


        <div class="row topmar">
          <div class="col-sm-4">
            <img src={ReactN} width="80px" height="80px" />
            <h4>React</h4>
          </div>
          <div class="col-sm-4">
            <img src={Php} width="80px" height="80px" />
            <h4>php</h4>
          </div>
          <div class="col-sm-4">
            <img src={Asp} width="80px" height="80px" />
            <h4>Asp.net</h4>
          </div>
        </div>


        <div class="row  topmar ">
          <div class="col-sm-4">
            <img src={Html} width="80px" height="80px" />
            <h4>HTML</h4>
          </div>
          <div class="col-sm-4">
            <img src={Css} width="80px" height="80px" />
            <h4>Css</h4>
          </div>
          <div class="col-sm-4">
            <img src={Js} width="80px" height="80px" />
            <h4>javaScript</h4>
          </div>
        </div>


        <div class="row topmar">
          <div class="col-sm-4">
            <img src={Jquery} width="80px" height="80px" />
            <h4>jQuery</h4>
          </div>
          <div class="col-sm-4">
            <img src={Prolog} width="80px" height="80px" />
            <h4>prolog</h4>
          </div>
          <div class="col-sm-4">
            <img src={cordova} width="80px" height="80px" />
            <h4>Cordova</h4>
          </div>
        </div>
        <div class="row topmar">
          <div class="col-sm-4">
            <img src={R} width="80px" height="80px" />
            <h4>R</h4>
          </div>
          <div class="col-sm-4">
            <img src={Python} width="80px" height="80px" />
            <h4>Python</h4>
          </div>
        </div>




        <h3>Platform</h3><hr width="40%" class="new5" />
        <div class="row topmar">
          <div class="col-sm-4">
            <img src={Git} width="80px" height="80px" />
            <h4>github</h4>
          </div>
          <div class="col-sm-4">
            <img src={Android} width="80px" height="80px" />
            <h4>Android Studio</h4>
          </div>
          <div class="col-sm-4">
            <img src={Mysql} width="80px" height="80px" />
            <h4>MySQL</h4>
          </div>

        </div>
        <div class="row topmar">
          <div class="col-sm-4">
            <img src={unity} width="80px" height="80px" />
            <h4>Unity</h4>
          </div>
          <div class="col-sm-4">
            <img src={VSC} width="80px" height="80px" />
            <h4>Visual Studio Code</h4>
          </div>
          <div class="col-sm-4">
            <img src={tableau} width="80px" height="80px" />
            <h4>Tableau Public</h4>
          </div>


        </div>

        <h3 class="toptop">Soft Skills</h3><hr width="40%" class="new5" />

        <div class="container  toptop text-center">
          <div class="col-6 col-sm-3 broderr bodySc">Apprenant rapide et capable de saisir rapidement différents concepts.</div>
          <div class="col-6 col-sm-3 broderr bodySc">Travailleur d'équipe et désireux de faire partie d'une équipe qui gère un projet et donne une présentation appropriée.</div>
          <div class="col-6 col-sm-3 broderr bodySc"> Capacité à travailler sous pression et à respecter les délais des projets.</div>
          <div class="col-6 col-sm-3 broderr bodySc">Programmeur expérimenté capable de comprendre et de déboguer les codes déjà existants.</div>
        </div>

        <h3 class="toptop">Languages</h3><hr width="40%" class="new5" />
        <div class="row topmar">
          <div class="col-sm-4">
            <img src={Francais} width="80px" height="80px" />
            <h4>Française</h4>
          </div>
          <div class="col-sm-4">
            <img src={English} width="80px" height="80px" />
            <h4>Anglais</h4>
          </div>
          <div class="col-sm-4">
            <img src={Arabic} width="80px" height="80px" />
            <h4>Arabe</h4>
          </div>
        </div>
      </div>


    )
  }
}
export default Skills;

// <span class="glyphicon glyphicon-heart logo-small"></span>
// <span class="glyphicon glyphicon-lock logo-small"></span>

// <span class="glyphicon glyphicon-wrench logo-small "></span>
// <span class="glyphicon glyphicon-certificate logo-small"></span>
// <span class="glyphicon glyphicon-leaf logo-small"></span>
