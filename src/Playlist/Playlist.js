import React from 'react';
import classes from './Playlist.module.css';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';





class Playlist extends React.Component{

    

    state={
        videoList: [],
        
        
    }

    
   




    componentDidMount(){
      axios.get("https://5ee2488a8b27f30016094871.mockapi.io/playlist")
      .then((response)=>{
        console.log(response.data);
          this.setState({
              videoList: [...response.data]  //now we are setting setTate to with array of data
          });
      })

      .catch(err =>{
          console.log(err)
      });
    }



    render(){
        return(
           <div className={classes.MainContainer}>
             {
                 this.state.videoList.map(item =>{
                     
                     return <VideoCard key={item.id} id={item.id} title={item.title}
                      thumbnail={item.thumbnail}/>  
                 })
             }
           </div>
        );
    }
}

export default Playlist;