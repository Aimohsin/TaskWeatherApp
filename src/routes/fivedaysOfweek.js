import React, {Component} from 'react'
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';
import Navbar from './navbar'

class fivedaysOfweek extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <h2>Five Days Forecast</h2>
                <ReactWeather
                    forecast="5days"
                    apikey="415e274eedee39167d24bfe1a8ab31ff"
                    type="city"
                    city="Munich"/>
            </div>
        )
    }
}

export default fivedaysOfweek