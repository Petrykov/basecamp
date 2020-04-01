import React from 'react';
import './App.css';
import MainJs from './Main.js'
import MapJs from './Map.js'
import DroneJs from './Drone.js'
import {Route,BrowserRouter} from "react-router-dom";

class Nav extends React.Component{


    render(){
        return <div>
                    <div className="navbar">
                        <div>
                            <button className = "btnNav" href="/"> Main</button>
                            <button className = "btnNav" href="/mapJs">Map</button>
                            <button className = "btnNav" href="/droneJs">Drone</button>
                        </div>
                    </div>
                        

                    <BrowserRouter>
                        <Route exact path="/" component = {MainJs}/>
                        <Route path="/mapJs" component = {MapJs}/>
                        <Route path="/droneJs" component = {DroneJs}/>
                    </BrowserRouter>
                                    
                </div>
    }
}

export default Nav;
