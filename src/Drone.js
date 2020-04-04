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

                            <div className="underline"> <h1>Drones measurements</h1></div>

                                <ul className = "measurementsUL">
                                    {this.state.droneCoordinates.length === 0 ? 
                                    (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                    : (
                                            this.state.droneCoordinates.map((e, i) => {
                                            return <h3 key={i} ><li>{"# {"+(i+1)+ "} [" + e.Coordinates+"]"}</li></h3> ;
                                        })
                                    )}
                                </ul>
                        </div>

                        <div className="usePannel">
                         <h2>Control panel</h2>
                            <button onClick={this.getCoordinates} className="pannelBtn">Get measurements</button>
                            <button className="pannelBtn">Synchronize with drones</button>      
                        </div>

                        

                    </div>                 
                </div>
    }
}

export default Drone;
