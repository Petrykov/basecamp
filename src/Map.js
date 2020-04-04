import React from 'react';
import './App.css';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapJs extends React.Component{

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
        return (
            <div>
                <div className="body border">
                    <div className = "googleMap">
                        <Map
                            google={this.props.google}
                            zoom={14}
                            initialCenter={{
                            lat: -1.2884,
                            lng: 36.8233,
                            }}
                        />
                    </div>

                    {this.state.droneCoordinates.length === 0 ? 
                        (<div>Loading...</div>) 
                        : (
                                this.state.usersCollection.map((e, i) => {
                                return <div key={i}>{e.Coordinates}</div>;
                            })
                        )}

                </div>
                <button onClick={this.getCoordinates}>reqeust from localhost</button>                                  
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80'
})(MapJs);
