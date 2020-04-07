import React from 'react';
import './App.css';
import MainJs from './Main.js'
import MapJs from './Map.js'
import DroneJs from './Drone.js'
import {Route,Router,BrowserRouter} from "react-router-dom";

class Nav extends React.Component{

    render(){
        return <div>
             
                    <div className="navbar">
                        <div>
                            <a href="/map"   className = "aNav" onPress={() => this.checkLogin()}  >Map</a>
                            <a href="/drone" className = "aNav">Drone</a>
                        </div>
                    </div>
                    
                    <BrowserRouter>
                        <Route exact path="/map" component = {MapJs}/>
                        <Route path="/drone" component = {DroneJs}/>
                    </BrowserRouter>                  
                </div>
    }
}

export default Nav;
