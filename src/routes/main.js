import React, {Component} from 'react'
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles 
import 'react-open-weather/lib/css/ReactWeather.css';
import Navbar from '../routes/navbar'

const API_KEY= "415e274eedee39167d24bfe1a8ab31ff";

class main extends Component{
    render(){
        const api_Call = (`http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`)
        // const weatherURL = {
        //     `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${apiConfig.415e274eedee39167d24bfe1a8ab31ff}`
        // }
        return(
            <div>
                <Navbar />
                <h1>Weather App</h1>
                <ReactWeather forecast="5days"
                apikey = "415e274eedee39167d24bfe1a8ab31ff"
                //apikey='http://api.openweathermap.org/data/2.5/weather?APPID=415e274eedee39167d24bfe1a8ab31ff&q=London'
                type="city" city="Munich"/>
            </div>
        )
    }
}

export default main