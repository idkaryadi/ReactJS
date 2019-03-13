import React, { Component } from 'react';
import axios from 'axios';
import ContentNews from './../component/ContentNews'
import {Redirect} from "react-router-dom"
// import { url } from 'inspector';

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
            // is_login: false
            is_login: JSON.parse(localStorage.getItem("is_login"))
        };
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        this.doSearch(event.target.value);
    }

    doSearch(keyword) {
        const self = this;
        const urlSearch = "https://newsapi.org/v2/everything?q=" + keyword + "&apiKey=" + apiKey
        axios
            .get(urlSearch)
            .then(function (response) {
                self.setState({ listNews: response.data.articles });
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    };


// handleSubmit(event) {
//     // alert('A name was submitted: ' + this.state.value)
//     event.preventDefault();
// }


render() {
    console.log("here")
    const { listNews, listSource, username, is_login } = this.state;
    if (is_login === false || is_login === null){
        return <Redirect to={{pathname:"/signin"}}/>
    } else {
    return (
        <div className="App">
            <ContentNews handleChange={this.handleChange} sourceList={listSource} newsList={listNews} />
        </div>
    );
}
}
}

export default App;