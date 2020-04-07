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

class MapJs extends React.Component{

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

    componentDidMount() {
 
        // Basic initialize
        MarkersOnMap.Init({
     
          googleApiKey: "AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80",
     
          markerObjects: [
            {
              markerLat: 52.266075, // marker latitude as number
              markerLong: 6.155216, // marker longitude as number
            },

            {
                markerLat: 52.266075, // marker latitude as number
                markerLong: 6.222750, // marker longitude as number
              },
          ],
        });
     
        // Select map element (ID or Class)
        MarkersOnMap.Run('div#GoogleMap');
     
      }

    render(){
        return (
            <div>
                <div className="body border">
                    <div className = "googleMap">
                    <div id="GoogleMap"></div>
                    </div>

                    {this.state.droneCoordinates.length === 0 ? 
                        (<div>Loading...</div>) 
                        : (
                                this.state.droneCoordinates.map((e, i) => {
                                return <div key={i}>{e.Coordinates}</div>;
                            })
                        )}

                </div>
                <button onClick={this.getCoordinates}>reqeust from localhost</button>                                  
            </div>
        );
    }
}

export default MapJs;

GoogleApiWrapper({
    apiKey: 'AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80'
})(MapJs);
