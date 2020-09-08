import React from 'react';
// import VideoCard from './VideoCard/VideoCard'
import classes from "./App.module.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoWatchPage from './VideoWatchPage/VideoWatchPage';





class App extends React.Component{

  render(){
    return (
      <div className={classes.App}>
        
        <BrowserRouter>
      
         <Switch>
        <Route path="/" component={VideoWatchPage} />
        
        
        </Switch>
               
              
               
               

       </BrowserRouter>
        
     
      </div>
    );
  }
}



export default App;
