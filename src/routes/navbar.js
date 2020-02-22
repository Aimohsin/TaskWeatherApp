import React, {Component} from 'react'
import '../StyleSheets/nav.css'

class navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><a href='/fiveDaysOfWeek'>Five Days</a></li>
                        <li><a href='/nameOfTheDay'>Specific Day Weather</a></li>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default navbar