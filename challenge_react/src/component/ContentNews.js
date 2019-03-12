import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopNews from './TopNews'
import News from './News'
import Search from './Search'
// import NameForm from './Search'

// export default ListNews;

class ContentNews extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <Search handleChange={this.props.handleChange}/>
                            {/* <NameForm /> */}
                            <div className="row  head-top-news">
                                <span className="mr-auto"><strong>BERITA TERKINI</strong></span>
                                <span className="ml-auto">Lihat Semua</span>
                            </div>
                            {this.props.sourceList.map((item, key) => {
                                return <TopNews key={key} numb={key + 1} url={item.url} title={item.title} />;
                            })}
                        </div>
                        <div className="col-md-6">
                            {this.props.newsList.map((item, key) => {
                                const src_img = item.urlToImage === null ? "" : item.urlToImage;
                                const content = item.urlToImage !== null ? item.content : "";
                                return <News key={key} title={item.title} img={src_img} content={content} publish={item.publishedAt} author={item.author} url={item.url} />;
                            })}
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
        );
    }
}
export default ContentNews;