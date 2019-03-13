import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const News = props => {
//     return (
//         <div className="news">
//             <div className="news-item">
//                 <img src={props.img} className="news-picture" />
//                 <span className="news-title"><strong>{props.title}</strong></span><br />
//                 <span className="news-author">{props.publish}</span><br />
//                 <span className="news-author">{props.author}</span>
//                 <p>
//                     {props.content}
//                 </p>
//                 <a href={props.url}>Selengkapnya...</a>
//                 <div className="news-footer">
//                     <a href="#"><img className="icon" src="./assets/img/ico/like.png" /></a>
//                     <a href="#"><img className="icon" src="./assets/img/ico/dislike.png" /></a>
//                     <a href="#"><img className="icon" src="./assets/img/ico/share.png" /></a>
//                 </div>
//             </div>
//         </div>
//     );
// }

class News extends Component {
    render() {
        return (
            <div className="news">
                <div className="news-item">
                    <img src={this.props.img} className="news-picture" />
                    <span className="news-title"><strong>{this.props.title}</strong></span><br />
                    <span className="news-author">{this.props.publish}</span><br />
                    <span className="news-author">Author: {this.props.author}</span>
                    <p>
                        {this.props.content}
                    </p>
                    <a href={this.props.url}>Selengkapnya...</a>
                    <div className="news-footer">
                        <a href="#"><img className="icon" src="./assets/img/ico/like.png" /></a>
                        <a href="#"><img className="icon" src="./assets/img/ico/dislike.png" /></a>
                        <a href="#"><img className="icon" src="./assets/img/ico/share.png" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;