import React from 'react';
import './App.css';


class Drone extends React.Component{

    render(){
        return <div>
                    <div className="body">
                        <div className="dronesInfo">
                            <h2>
                                <ul className = "measurementsUL">
                                    <li>measurements</li>
                                </ul>
                            </h2>
                        </div>

                        <div className="pannel">

                            <div className="pannelBtnDiv">
                                <button className="pannelBtn">Get measurements</button>
                            </div>
                            
                            <div className="pannelBtnDiv">
                                <button className="pannelBtn">Synchronize with drones</button>                            
                            </div>
                            
                        </div>

                    </div>
                </div>
    }
}

export default Drone;
