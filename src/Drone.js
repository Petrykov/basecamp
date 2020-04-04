import React from 'react';
import './App.css';
import axios from 'axios';
import 'regenerator-runtime/runtime';

class Drone extends React.Component{

    constructor(props) {
        super(props);
        this.state = { droneCoordinates: []};
    }

    getCoordinates = async () => {
        console.log('in here');
        await axios.get("http://localhost:3000")
        .then(res => this.setState({ droneCoordinates: res.data}));

        for(let i=0; i < this.state.droneCoordinates.length; i ++){
            console.log(this.state.droneCoordinates[i]);
        }

    };


    render(){
        return <div>
                    <div className="body">
                        <div className="dronesInfo">
                                <ul className = "measurementsUL">
                                    {this.state.droneCoordinates.length === 0 ? 
                                    (<div>Loading...</div>) 
                                    : (
                                            this.state.droneCoordinates.map((e, i) => {
                                            return <h3><li key={i}>{"# {"+i+ "} [" + e.Coordinates+"]"}</li></h3> ;
                                        })
                                    )}
                                </ul>
                            
                        </div>

                        <div className="pannel">

                            <div className="pannelBtnDiv">
                                <button onClick={this.getCoordinates} className="pannelBtn">Get measurements</button>
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
