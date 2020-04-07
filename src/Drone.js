import React from 'react';
import './App.css';
import axios from 'axios';
import 'regenerator-runtime/runtime';
var net = require('net');

class Drone extends React.Component{

    constructor(props) {
        super(props);
        this.state = { droneCannonCoordinates: [], 
                        droneItemCoordinates: [],
                        dronePedestrianCoordinates: [],
                        droneRayCoordinates: [],
                        droneWagonCoordinates: []
                    };
    }

    getCannonCoordinates = async () => {
        await axios.get("http://localhost:3000/cannon")
        .then(res => this.setState({ droneCannonCoordinates: res.data}));
    };

    getItemCoordinates = async () => {
        await axios.get("http://localhost:3000/item")
        .then(res => this.setState({ droneItemCoordinates: res.data}));
    };


    getPedestrianCoordinates = async () => {
        await axios.get("http://localhost:3000/pedestrian")
        .then(res => this.setState({ dronePedestrianCoordinates: res.data}));
    };


    getRayCoordinates = async () => {
        await axios.get("http://localhost:3000/ray")
        .then(res => this.setState({ droneRayCoordinates: res.data}));
    };


    getWagonCoordinates = async () => {
        await axios.get("http://localhost:3000/wagon")
        .then(res => this.setState({ droneWagonCoordinates: res.data}));
    };

    syncWithDrone(){
        var client = net.connect(6969, 'localhost');    
        client.write('Test message from node js to java application');
        client.end();
    }

    render(){
        return <div>
                    <div className="body">
                        <div className="dronesInfo">

                            <div className="underline"> <h1>Cannon measurements</h1></div>

                                <ul className = "measurementsUL">
                                    {this.state.droneCannonCoordinates.length === 0 ? 
                                    (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                    : (
                                            this.state.droneCannonCoordinates.map((e, i) => {
                                            return <h3 key={i} ><li>{"# {"+(i+1)+ "} lat: [" + e.latitude+"] + long: ["+ e.longitude+"]"}</li></h3> ;
                                        })
                                    )}
                                </ul>
                            </div>

                        <div className="usePannel">
                         <h2>Control panel</h2>
                            <button onClick={this.getCannonCoordinates} className="pannelBtn">Get measurements</button>
                            <button onClick={this.syncWithDrone} className="pannelBtn">Synchronize with drones</button>      
                        </div>

                        <div className="separator"/>

                        <div className="dronesInfo">

                                <div className="underline"> <h1>Item measurements</h1></div>

                                    <ul className = "measurementsUL">
                                        {this.state.droneItemCoordinates.length === 0 ? 
                                        (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                        : (
                                                this.state.droneItemCoordinates.map((e, i) => {
                                                return <h3 key={i} ><li>{"# {"+(i+1)+ "} lat: [" + e.latitude+"] + long: ["+ e.longitude+"]"}</li></h3> ;
                                            })
                                        )}
                                    </ul>
                                </div>

                            <div className="usePannel">
                                <h2>Control panel</h2>
                                <button onClick={this.getItemCoordinates} className="pannelBtn">Get measurements</button>
                                <button className="pannelBtn">Synchronize with drones</button>      
                            </div>

                            <div className="separator"/>

                            <div className="dronesInfo">

                                <div className="underline"> <h1>Pedestrian measurements</h1></div>

                                    <ul className = "measurementsUL">
                                        {this.state.dronePedestrianCoordinates.length === 0 ? 
                                        (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                        : (
                                                this.state.dronePedestrianCoordinates.map((e, i) => {
                                                return <h3 key={i} ><li>{"# {"+(i+1)+ "} lat: [" + e.latitude+"] + long: ["+ e.longitude+"]"}</li></h3> ;
                                            })
                                        )}
                                    </ul>
                                </div>

                            <div className="usePannel">
                                <h2>Control panel</h2>
                                <button onClick={this.getPedestrianCoordinates} className="pannelBtn">Get measurements</button>
                                <button className="pannelBtn">Synchronize with drones</button>      
                            </div>

                            <div className="separator"/>

                               <div className="dronesInfo">

                                <div className="underline"> <h1>Ray measurements</h1></div>

                                    <ul className = "measurementsUL">
                                        {this.state.droneRayCoordinates.length === 0 ? 
                                        (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                        : (
                                                this.state.droneRayCoordinates.map((e, i) => {
                                                return <h3 key={i} ><li>{"# {"+(i+1)+ "} lat: [" + e.latitude+"] + long: ["+ e.longitude+"]"}</li></h3> ;
                                            })
                                        )}
                                    </ul>
                                </div>

                            <div className="usePannel">
                                <h2>Control panel</h2>
                                <button onClick={this.getRayCoordinates} className="pannelBtn">Get measurements</button>
                                <button className="pannelBtn">Synchronize with drones</button>      
                            </div> 

                            <div className="separator"/>

                        
                            <div className="dronesInfo">

                                <div className="underline"> <h1>Wagon measurements</h1></div>

                                    <ul className = "measurementsUL">
                                        {this.state.droneWagonCoordinates.length === 0 ? 
                                        (<h1 className = "h1Style">Data was not requested yet. Press 'get measurements'</h1>) 
                                        : (
                                                this.state.droneWagonCoordinates.map((e, i) => {
                                                return <h3 key={i} ><li>{"# {"+(i+1)+ "} lat: [" + e.latitude+"] + long: ["+ e.longitude+"]"}</li></h3> ;
                                            })
                                        )}
                                    </ul>
                                </div>

                            <div className="usePannel">
                                <h2>Control panel</h2>
                                <button onClick={this.getWagonCoordinates} className="pannelBtn">Get measurements</button>
                                <button className="pannelBtn">Synchronize with drones</button>      
                            </div>                     

                        

                    </div>                 
                </div>
    }
}

export default Drone;
