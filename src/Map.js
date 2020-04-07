import React from 'react';
import './App.css';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import { Map, GoogleApiWrapper,withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow } from 'google-maps-react';

import MarkersOnMap from 'markers-on-map-react';
import { textChangeRangeIsUnchanged } from 'typescript';

class MapJs extends React.Component{

    constructor(props) {
        super(props);
        this.state = { droneCoordinates: [], markerObjectsState:[]};
    }

     getCoordinates = async () => {
         this.setState({droneCoordinates: null});
        await axios.get("http://localhost:3000/cannon")
        .then(res =>this.setState({ droneCoordinates: res.data}));

        for(let i=0; i < this.state.droneCoordinates.length; i ++){
            console.log("rsp: " + this.state.droneCoordinates[i]);
        }
    
        this.uplaodMap();
    };

    uplaodMap() {

        for(let i =0; i < this.state.droneCoordinates.length; i ++){

            let coordinates = {
                markerLat: this.state.droneCoordinates[i].latitude,
                markerLong: this.state.droneCoordinates[i].longitude
            };

            this.state.markerObjectsState.push(coordinates);
        }

        MarkersOnMap.Init({
          googleApiKey: "AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80",
          
          markerObjects: this.state.markerObjectsState
          
        });

        MarkersOnMap.Run('div#GoogleMap');
      }

    render(){
        return (
            <div className = "test">
                <div className="body">
                    <div className = "googleMap">
                        <div id="GoogleMap"></div>
                    </div>       
                </div>
                <button className = "pannelBtn requestDronesMap" onClick={this.getCoordinates}>Get drones</button>                                
            </div>
        );
    }
}

export default MapJs;

GoogleApiWrapper({
    apiKey: 'AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80'
})(MapJs);
