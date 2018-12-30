import React, { Component } from 'react'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import Job from './Components/Job'
import Register from './Components/register'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
 
  render() {
    
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={ () =>
            
            <Home />
            
          } />
          <Route exact  path='/jobs' render={()=><Jobs />}/>
          <Route exact path={'/job/:id'} component={Job}/>
          <Route exact path='/job/:id/register' component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
