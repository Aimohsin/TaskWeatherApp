import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import main from './routes/main'
import fiveDaysOfWeek from './routes/fivedaysOfweek'
import nameOfTheDay from './routes/nameOftheDay'
import navbar from './routes/navbar'
import apikey from './apiConfig'

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={main} />
            <Route path='/fiveDaysOfWeek' component={fiveDaysOfWeek} />
            <Route path='/nameOfTheDay' component={nameOfTheDay} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
