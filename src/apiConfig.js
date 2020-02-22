import React, {Component} from 'react'

const API_KEY= "415e274eedee39167d24bfe1a8ab31ff";

class apiConfig extends Component{
    render(){
        const api_Call = (`http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`)

        return(
            <div>
                
            </div>
        )
    }
}
export default apiConfig