import React, {Component} from 'react';

// const TopNews = props => {
//     return (
//         <div className="top-news">
//             <div className="top-news-item">
//                 <div className="rating"><strong>{props.numb}</strong></div>
//                 <div>{props.title}</div>
//             </div>
//         </div>
//     );
// }

class TopNews extends Component {
    render(){
        return (
            <div className="top-news">
                <a href={this.props.url}>
                <div className="top-news-item">
                    <div className="rating"><strong>#{this.props.numb}</strong></div>
                    <div>{this.props.title}</div>
                </div>
                </a>
            </div>
        );
    }
}   

export default TopNews;