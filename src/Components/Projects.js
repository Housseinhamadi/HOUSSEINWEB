import React from 'react';
import ReactDOM from 'react-dom';
import './MainBody.css'
import './Projects.css'

class Projects extends React.Component {
  render() {
    return (
      <div class="container-fluid backGray" id="project">
        <div class="text-center">
          <h2 class="garycolo">Projets</h2><br /><br /><br />
        </div>
        <div class="row">
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading header">
                <b class="textsize">Système d’université </b>
              </div>
              <div class="panel-body proPanels">
                <p>asp.net, base de donne local.<br />
                  Vise à laisser le tuteur être flexible en
                  mettant des notes et des cours où les étudiants pourraient également vérifier leurs notes, commenter certains messages et soumettre des fichiers afin de les envoyer au tuteur.</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Hôtel réservation<br /></b><br />
              </div>
              <div class="panel-body proPanels">
                <p> php base de donne: Oracle<br />
                Vise à réserver toute chambre, y compris ses détails, prix et description. Et lors de la
                 réservation sur cette application, il enverra immédiatement à la réception si une chambre réservée. Il est
                 également facile d'annuler toute réservation
              </p>

              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize"> SOKOBAN game <br /></b><br />

              </div>
              <div class="panel-body proPanels">
                <p>Desktop GAMES, JavaFx
              Tout est question de score, de nombre de coups, pour déplacer quelques cases à leur place.</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Private courses mobile application </b>
              </div>


              <div class="panel-body proPanels">
                <p>software engineering<br />
                 Application qui permet aux tuteurs et aux étudiants de communiquer, dans laquelle les étudiants peuvent rechercher un enseignant
                  et le tuteur peut trouver des étudiants, et cela en fonction du lieu, l'année scolaire de l'étudiant et des matières.
                  Cette application est en cours d'exécution.
                 </p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Configuration DHCP</b>



              </div>
              <div class="panel-body proPanels">
                <p> Réseau de configuration, Unix Configuration entre clients et serveurs</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">company’s system <br /></b><br />
              </div>


              <div class="panel-body proPanels">
                <p>
                  Php<br />Vise à coordonner entre les managers et les équipes de l'entreprise et leurs projets, auquel
                      le manager envoie le projet par email par ce système à un département. Et le manager utilise un planning
                       pour pouvoir faire une réunion via cette application en même temps le manager pourrait envoyer des questions
                       à l'équipe pour répondre et le résultat sera obtenu sous forme de schéma</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Car delivery system <br /></b><br />
              </div>

              <div class="panel-body proPanels">
                <p>Projet de fin d’étude
                C’est une application mobile.
                Avec cette application, n'importe qui pourrait être en mesure de rechercher les travailleurs mécaniques
                les plus proches pour aider à résoudre les problèmes des moyens de locomotion, le travailleur confirmera
                  l'appel et pourrait aller discuter avec le client.</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Système de bibliothèque</b>
              </div>


              <div class="panel-body proPanels">
                <p> web, angulaire, nids, base de données SQLite
                Avec cette application l’utilisateur peut réserver un livre et toutes les informations de chaque livre.</p>
              </div>
              <div class="panel-footer">
                {/* See project */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Analyses de suicide<br /></b><br />

              </div>

              <div class="panel-body proPanels">
                <p> L'objectif de ce projet et de voir quel est le principal facteur de suicide?, pour cela j'ai utilise tableau public pour visualise et annalyse les resulta.

                 </p>
              </div>
              <div class="panel-footer">
                {/* see project */}
              </div>
            </div>

          </div >
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Système de conversion </b>
              </div>


              <div class="panel-body proPanels">
                <p>Système de conversion de signes sourds en lettres imprimée en utilisant un leapmotion (unité, C sharp).
                     </p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading  header">
                <b class="textsize">Projet IOT </b>
              </div>


              <div class="panel-body proPanels">
                <p>Crée une application mobile pour connecter avec Arduino et gère plusieurs capteur(température, distance...)
                     </p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading header">
                <b class="textsize">Reconnaissance vocal</b>
              </div>


              <div class="panel-body proPanels">
                <p>
                  Java<br />Enregistrer sa voix sur l’ordinateur, la même personne pourra ensuite se reconnecter facilement pour se faire reconnaitre.</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading header">
                <b class="textsize">Conversion des prospects en clients</b>
              </div>


              <div class="panel-body proPanels">
                <p>
                  l'objectif est de créé un modèle machine learning pour converse des prospects en clients.</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="panel panel-default text-center">
              <div class="panel-heading header">
                <b class="textsize"><a href="https://housseincv.000webhostapp.com/Nanotechnology_in_cancer_treatment.pdf" target="_blank">Cliquez ici pour voir mon premier article</a></b>
              </div>
              <div class="panel-body proPanels">
                <p>
                  Nanotechnology in cancer treatment</p>
              </div>
              <div class="panel-footer">
                {/* <a href="https://github.com/Housseinhamadi" target="_blank">See project</a> */}
              </div>



            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
