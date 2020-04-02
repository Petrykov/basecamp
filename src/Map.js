import React from 'react';
import './App.css';
import axios from 'axios';

class Map extends React.Component{

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
                    <h2>Should show map with drones</h2>
                </div>

                <button onClick={this.fetchMessages}>Click me</button>                                

            </div>
        );
    }
}

export default Map;
