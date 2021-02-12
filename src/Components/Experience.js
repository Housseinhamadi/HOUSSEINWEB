import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import topotrade from "./topotrade.jpg"

class Experience extends React.Component {
    render() {
        return (

            <div id="experience" class="container-fluid bg-3 text-center">
                <h3>Expérience</h3><br /><br /><br /><br />

                <div class="row">
                    <div class="col-sm-6">
                        <a href="https://www.topotrade.com" target="blank"><img src={topotrade} height="200px" width="200px" ></img><br /><br />
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <h3>Alternance en tant qu'ingénieur Informatique</h3>
                        <p>
                            Topotrade.com est la première place de marché en ligne spécialement conçue pour la vente et l'achat d'instruments d'arpentage. Topotrade apporte le plus grand choix d'instruments d'arpentage sur le marché tout en garantissant la qualité de l'instrument et la protection dans chaque transaction.
                        </p>
                        <b>
                            Intègre une équipe de développeur pour créer une nouvelle version du site web, en plus resoudre plusieur problem en utilisant l'IA
                        </b>
                    </div>
                </div>
                <hr></hr>
                <br /><br />
                <br /><br />
                <div class="row">
                    <div class="col-sm-6">
                        <a href="https://www.topotrade.com" target="blank"><img src={topotrade} height="200px" width="200px" ></img><br /><br />
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <h3>Stage en tand que développeur Web</h3>
                        <p>
                            Topotrade.com est la première place de marché en ligne spécialement conçue pour la vente et l'achat d'instruments d'arpentage. Topotrade apporte le plus grand choix d'instruments d'arpentage sur le marché tout en garantissant la qualité de l'instrument et la protection dans chaque transaction.
                        </p>
                        <b>
                            Intègre une équipe de développeur pour créer une nouvelle version du site web.
                        </b>
                    </div>
                </div>
            </div >

        )
    }
}

export default Experience;
