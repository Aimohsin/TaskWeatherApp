import React, {Component} from 'react'
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';
import Navbar from './navbar'

class nameOftheDay extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <h2>Todays Weather</h2>
                <ReactWeather
                forecast="today"  
                apikey="415e274eedee39167d24bfe1a8ab31ff"
                type="geo"
                lat="48.1351"
                lon="11.5820"
            />
            </div>
        )
    }
}

export default nameOftheDay;