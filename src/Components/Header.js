import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default bg-gray" data-spy="affix" >
        <div class="little">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand little " href="#">Moi</a>
          </div>
          <div class="collapse navbar-collapse little" id="myNavbar">
            <ul class="nav navbar-nav navbar-right blacked">
              <li><a href="#project" class="blacked">Projets</a></li>
              <li><a href="#skills" class="blacked" >Compétences</a></li>
              <li><a href="#contact" class="blacked" >Contact</a></li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
