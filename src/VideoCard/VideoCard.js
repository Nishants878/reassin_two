import React from 'react';
import { Link } from 'react-router-dom';

import classes from './VideoCard.module.css';




// class VideoCard extends React.Component{
    
   

      


//     render() {
//         return(
//             <Link className={classes.VideoCard} to={`/?vId=${this.props.id}`}>
//                 <div>
//                     <img className={classes.Thumbnail} src={this.props.thumbnail} alt="Video Thumbnail" />
//                     <h3 className={classes.Title}>{this.props.title}</h3>
//                 </div>
//             </Link>
//         );
//     }
// }


const VideoCard = (props) => {

  
      

    return(
        <Link className={classes.VideoCard} to={`${props.id}`}>
            <div>
                <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.Title}>{props.title}</h3>
            </div>
        </Link>
    );
}

export default VideoCard;