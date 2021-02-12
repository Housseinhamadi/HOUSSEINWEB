import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import AI from "./AI.PNG"
import Cplusplus from "./Cplusplus.PNG"
import python from "./python.PNG"
import web_full_stack from "./Web_full_stack.PNG"
import javascript from "./JavaScript.PNG"


class certification extends React.Component {
    render() {
        return (

            <div id="certification" class="container-fluid bg-3 text-center">
                <h3>Certification</h3><br /><br /><br /><br />
                <div class="row">
                    <div class="col-sm-4">
                        <a href="https://www.udemy.com/certificate/UC-00f3c210-4a91-403d-8213-12906d0a2494/" target="blank"><img src={AI} height="70%" width="70%" ></img><br /><br />
                        </a>

                    </div>
                    <div class="col-sm-4">
                        <a href="https://www.udemy.com/certificate/UC-2a31d392-1eaf-429e-b570-b1f4408702be/" target="blank"><img src={web_full_stack} height="70%" width="70%" ></img><br /><br />
                        </a>

                    </div>
                    <div class="col-sm-4">
                        <a href="https://www.udemy.com/certificate/UC-1e7a1791-f1b0-4aaa-b9bc-53a598b7ed9b/" target="blank"><img src={javascript} height="70%" width="70%" ></img><br /><br />
                        </a>

                    </div>
                </div>

                <br /><br />
                <br /><br />
                <div class="row">
                    <div class="col-sm-4">
                        <a href="https://www.udemy.com/certificate/UC-e45cdeb9-d3cc-4d19-8bdc-1739d97baee6/" target="blank"><img src={python} height="70%" width="70%" ></img><br /><br />
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="https://www.udemy.com/certificate/UC-9527ebda-0b43-48ac-a122-e345b9b19896/" target="blank"><img src={Cplusplus} height="70%" width="70%" ></img><br /><br />
                        </a>
                    </div>
                </div>
            </div >

        )
    }
}

export default certification;
