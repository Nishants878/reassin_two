import React from 'react';
import classes from './PlayerWrapper.module.css';
import axios from 'axios';





class PlayerWrapper extends React.Component{
    
    
    state={
        videoData: {},
    }

    componentDidMount() {
        const videoId = 1;       
        axios.get(`https://5ee2488a8b27f30016094871.mockapi.io/video/${videoId}`)

        .then(response =>{
            console.log(response.data);
            this.setState({
                videoData:{...response.data},
            })
            
        })
        .catch(err =>{
            console.log('Details Api Load Failed')
        })
    }


    render(){
        return(
           <div className={classes.MainContainer}>
                  
                <iframe title="VimeoPlayer" src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`} controls></iframe>
        <div className={classes.VideoAction}>
        <p><span id="views-count">{this.state.videoData.views}</span> views</p>
        <div>
                                <i class="far fa-heart"></i>
                                <i class="far fa-comment-alt"></i>
                                <i class="far fa-bookmark"></i>
                            </div>
        </div>
           
        <h3 className={classes.VIdeoTitle}>{this.state.videoData.title}</h3>
                        <p className={classes.VideoDescription}>{this.state.videoData.description}</p>
        
           </div>
        );
    }
}

export default PlayerWrapper;
