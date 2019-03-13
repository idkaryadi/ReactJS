import React, { Component } from 'react';
import axios from 'axios';
import ContentNews from './../component/ContentNews'
import { Redirect } from "react-router-dom"

const apiKey = '8d167aa8e73146a096e180cad276f266'
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&category=" + "health" + "&apiKey=" + apiKey
// const urlSource = "https://newsapi.org/v2/sources?apiKey=" + apiKey + "&country=us"
const urlSource = "https://newsapi.org/v2/everything?q=today&apiKey=" + apiKey
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      listSource: [],
      username: '',
      // IsLogin: false
      is_login: JSON.parse(localStorage.getItem("is_login"))
    };
  }

  componentDidMount = () => {
    const self = this;
    axios.all([
      axios.get(urlHeadline),
      axios.get(urlSource)])

      .then(axios.spread(function (headlineResponse, sourceResponse) {
        self.setState({ listNews: headlineResponse.data.articles, listSource: sourceResponse.data.articles });
      }))

      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    console.log("here")
    const { listNews, listSource, username, is_login } = this.state;
    if (is_login === false || is_login === null) {
      return <Redirect to={{ pathname: "/signin" }} />
    } else {
      return (
        <div className="App">
          <ContentNews sourceList={listSource} newsList={listNews} />
        </div>
      );
    }
  }
}

export default App;