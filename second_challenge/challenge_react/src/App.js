import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Contact from './Contact'

// Import yg lain
// import About from './About'
// import Gallery from './Gallery'

// import Header from './component/Header'
// import Footer from './component/Footer'
// import Gallery from './pages/Gallery'
// import About from './pages/About'

import NewsNavBar from './component/NewsNavBar'
import TopNews from './component/TopNews'
import ContentNews from './component/ContentNews'

class App extends Component {
  render() {
    return (
        <div>
            {/* <Contact/> */}
            {/* <About/> */}
            {/* <Gallery/> */}
            
            {/* <Header/> */}
            {/* <About/> */}
            {/* <Footer/> */}
            
            <NewsNavBar/>
            <TopNews/>
            <ContentNews/>
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

export default App;