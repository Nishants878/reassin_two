import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import classes from './VideoWatchPage.module.css';
import PlayerWrapper from '../PlayerWrapper/PlayerWrapper';
import Playlist from '../Playlist/Playlist'

class VideoWatchPage extends React.Component {
    
      
     
    

      
    render(){
        return(
     <div className={classes.MainContainer}>
         <h1 className={classes.Title}>The Video Player</h1>
         <div className={classes.PlayerSection}>

        
             <PlayerWrapper/>
             <Playlist/>

            

         </div>
     </div>
        );
    }
}

export default VideoWatchPage;
