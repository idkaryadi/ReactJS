import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import NewsNavBar from './component/NewsNavBar'
import Navigation from './component/Navigation'
import NameForm from './component/Search';
import News from './component/News'
import TopNews from './component/TopNews'
import ContentNews from './component/ContentNews'

class AppX extends Component {
  render() {
    return (
      <div>
        {/* <Contact/> */}
        {/* <About/> */}
        {/* <Gallery/> */}

        {/* <Header/> */}
        {/* <About/> */}
        {/* <Footer/> */}

        <Navigation />
        {/* <TopNews/> */}
        {/* <ContentNews/> */}
      </div>
      //   <div className="App">
      //     <header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>
      //     </header>
      //   </div>
    );
  }
}

const apiKey = '8d167aa8e73146a096e180cad276f266'
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + apiKey
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

  // componentDidMount = () =>{  
  //   const self = this;
  //   axios
  //     .get(urlHeadline)
  //     .then(function(response){
  //       self.setState({listNews: response.data.articles});
  //       console.log(response.data)
  //     })
  //     .catch(function(error){
  //       console.log(error);
  //     });
  // };

  render() {
    console.log("here")
    const { listNews, listSource, username, IsLogin } = this.state;
    return (
      <div className="App">
        <Navigation />

        {/* <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <Search />
              <div className="row head-top-news">
                <span className="mr-auto"><strong>BERITA TERKINI</strong></span>
                <span className="ml-auto">Lihat Semua</span>
              </div>
              {listSource.map((item, key) => {
                return <TopNews key={key} numb={key + 1} title={item.title} />;
              })}
            </div>

            <div className="col-md-6">
              {listNews.map((item, key) => {
                const src_img = item.urlToImage === null ? "" : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <News key={key} title={item.title} img={src_img} content={content} publish={item.publishedAt} author={item.author} url={item.url} />;
              })}
            </div>
            <div className="col-md-1"></div>
          </div> */}
        <ContentNews sourceList={listSource} newsList={listNews} />
      </div>
    );
  }
}

export default App;