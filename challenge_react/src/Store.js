import createStore from 'unistore'
import axios from 'axios'
// import { connect } from 'http2';
// import SignIn from './pages/SignIn';

const initialState = {
    // api_key: '',
    username: '',
    password: '',
    email: '',
    is_login: false,
    // listNews: [],
    // listSource: [],
    kategori: '',
    listSource: []
    // urlHeadlineNews : "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + {api_key} + "&category=",
    // urlEvertything : "https://newsapi.org/v2/everything?q=today&apiKey=" + {api_key}
}

const apiKey = '8d167aa8e73146a096e180cad276f266'
const urlHeadline = "https://newsapi.org/v2/top-headlines?country=id&apiKey=" + apiKey
const urlSource = "https://newsapi.org/v2/everything?q=today&apiKey=" + apiKey

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    // changeInput = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };
    postLogout: state => {
        return { is_login: false };
    },
    postLogin: async state => {
        const data = { username: state.username, password: state.username }
        // const self = this
        
        await axios
            .post("https://ataataata.free.beeceptor.com/auth", data)
            .then(function (response) {
                console.log(response.data);
                if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        is_login: true,
                        api_key: response.data.api_key,
                        username: response.data.username,
                        email: response.data.email
                    })
                    // self.props.history.push("/profile")
                    // alert ("123")
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    },
    // // Add new, delete if error
    
    // getCategory: state => {
    //     const location = window.location.pathname
    //     var kat = ''
    //     if (location === '/sport') {
    //         kat = "sport"
    //     } else if (location === '/ekonomi') {
    //         kat = "economy"
    //     } else if (location === '/hiburan') {
    //         kat = "entertainment"
    //     } else if (location === '/teknologi') {
    //         kat = "technology"
    //     } else if (location === '/kesehatan') {
    //         kat = "health"
    //     }
    //     return {kategori:kat}
    // },

    getNews: async (state, kategori) => {
        // console.log(state.kategori)
        // use await
        await axios.all([
            axios.get(urlHeadline + "&category=" + kategori), //state.kategori
            axios.get(urlSource)])

            .then(axios.spread(function (headlineResponse, sourceResponse) {
                store.setState({listNews: headlineResponse.data.articles, listSource: sourceResponse.data.articles });
            }))

            .catch(function (error) {
                console.log(error);
            });
    }
})