import React, { Component } from 'react';
import axios from 'axios';
import ContentNews from './../component/ContentNews'
import {Redirect} from "react-router-dom"
import {actions} from './../Store'
import {connect} from 'unistore/react'
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount = () => {
    // this.props.getCategory()
    this.props.getNews("technology")
  }

  render() {
    console.log("here")
    // const { listNews, listSource, username, is_login } = this.state;
    if (this.props.is_login === false){
      return <Redirect to={{pathname:"/signin"}}/>
  } else {
    return (
      <div className="App">
        <ContentNews sourceList={this.props.listSource} newsList={this.props.listNews} />
      </div>
    );
  }
}
}
// export default App;
export default connect(
  'listNews, listSource, is_login', actions
  )(withRouter(App))