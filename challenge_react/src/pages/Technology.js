import React, { Component } from 'react';
import axios from 'axios';
import ContentNews from './../component/ContentNews'

const apiKey = '8d167aa8e73146a096e180cad276f266'
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&category="+"technology"+"&apiKey=" + apiKey
// const urlSource = "https://newsapi.org/v2/sources?apiKey=" + apiKey + "&country=us"
const urlSource = "https://newsapi.org/v2/everything?q=today&apiKey=" + apiKey
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      listSource: [],
      username: '',
      IsLogin: false
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
    const { listNews, listSource, username, IsLogin } = this.state;
    return (
      <div className="App">
        <ContentNews sourceList={listSource} newsList={listNews} />
      </div>
    );
  }
}

export default App;