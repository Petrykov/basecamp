import React from 'react';
import './App.css';
import axios from 'axios';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapJs extends React.Component{

    state = {
        messages : []
    }

    fetchMessages(){
       console.log('before');
        axios.get('localhost:3000/',{
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            proxy: {
                host: 'localhost:3306',
                port: 3306
            }
        }) .then(res=>{
            console.log('status: ' + res.data);
        });

    }

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
                </div>
                <button onClick={this.fetchMessages}>Click me</button>                                  
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBIbuhocBx01xskbWQo8hceOuuwHW9Tj80'
})(MapJs);
