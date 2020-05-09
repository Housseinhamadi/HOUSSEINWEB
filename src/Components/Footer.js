import React from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends React.Component {
  render (){
    return (
      <footer id="contact" class="container-fluid bg-4 text-center">
        <div class="container text-center">
          <h3 class="contactme">Contactez moi</h3>

          <div class="row">
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-earphone iconLarge bluec"></span><br /><p class="sitation">Phone: +33 6 41 16 96 71 </p><br />
              <span class="glyphicon glyphicon-envelope iconLarge bluec"></span><br /><a href="mailto:hseinhmede123@gmail.com" class="sitation" target="blacked" >Email: hseinhmede123@gmail.com</a><br />
            </div>
            <div class="col-sm-4">
              <span class="glyphicon glyphicon-globe iconLarge bluec"></span><br /><a href="https://www.google.com/maps/place/Paris/@48.8588377,2.2770197,12z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219" class="sitation" target="blacked" >Adresse: Paris, France</a><br />
              <span class="glyphicon glyphicon-user iconLarge bluec specific"></span><br /><p class="sitation">J'aime aider, si je peux vous aider, envoyez-moi un e-mail</p><br />
            </div>
            <div class="col-sm-4">
              <i class="fa fa-linkedin iconLarge bluec"></i> <br /><a href="https://www.linkedin.com/in/houssein-hamadi-a87698193/" class="sitation" target="blacked" >Linkedin Houssein</a><br />
              <i class="fa fa-github specific iconLarge bluec"></i> <br /><a href="https://github.com/Housseinhamadi" class="sitation" target="blacked" >github Houssein</a><br />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
