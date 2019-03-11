import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
          <header class=" shadow-und">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <img class="logo" src={"./assets/img/logo/logo-alterra-academy@2x.png"}/>
                    </div>
                    <div class="col-md-6 col-12">
                        <nav>
                            <ul>
                                <li><a class="link-about" href="about.html">ABOUT</a></li>
                                <li><a class="link-atas" href="galeri.html">GALERI</a></li>
                                <li><a class="link-atas" href="contact.html">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section>
            <div class="container-fluid img-background">
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                        <img class="profile" src="assets/img/profile.jpg"/>
                        <p class="name">Monkey D Luffy</p>
                        <p class="location">
                        <img src="assets/img/ico/ico-location@2x.png" class="img-loc"/>
                        Malang, East Java, Indonesia
                        </p>
                        <p class="role">Frontend Dev, UI/UX and Design</p>
                        <button type="button" class="btn btn-download">Download cv</button>
                    </div>
                    <div class="col-4">
                    </div>
                </div>            
            </div>

            <div class="container-fluid">
                <div class="row long-square white shadow-box">
                    <div class="col-md-6">
                        <p class="about-me">About Me</p>
                        <article>Hi! I am <strong>Monkey D Luffy</strong>, I work as a Front-end Developer at <a href="https://www.alterra.id" class="alterra">Alterra Group</a>.</article><br/>
                        <article>Front-end Developer are constructive work website use HTML, CSS, and JavaScript.</article><br/>
                        <article>Front-end Developer are the people who make it design and develop the design until become a website that can run.</article>
                    </div>
                    <div class="col-md-6">
                        <p class="information">Information</p>
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="row">Age</th>
                                <td>: 22 tahun</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Email</th>
                                <td>: monkeydluffy@alphatech.id</td>
                                </tr>
                                <tr>
                                <th scope="row">Address</th>
                                <td>: Jalan Raya Tidar No 23, Malang</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <img class="white-logo" src="assets/img/logo/logo-alterra-academy-plain@2x.png"/>
                        <p class="copyright">© copyright Alterra Group 2019</p>
                    </div>
                    <div class="col-6">
                        <p class="follow">Follow us on</p>
                        <div class="sosmed-box">
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-facebook@2x.png"/>Facebook</p>
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-twitter@2x.png"/>Twitter</p>
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-instagram@2x.png"/>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        <header class=" shadow-und">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-12">
                        <img class="logo" src="./assets/img/logo/logo-alterra-academy@2x.png"/>
                    </div>
                    <div class="col-md-6 col-12">
                        <nav>
                            <ul>
                                <li><a class="link-atas" href="about.html">ABOUT</a></li>
                                <li><a class="link-about" href="galeri.html">GALERI</a></li>
                                <li><a class="link-atas" href="contact.html">CONTACT</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section>
            <p><img src={"./assets/img/ico/ico-gallery@2x.png"}/>GALLERY</p>
        </section>

        <div class="container">
        <div class="container galerry-container"></div>

            <div class="fluid-gallery">
                <div class="row mb-3">

                    <div class="col-md-4 image-prop">
                        <div class="card">
                            <img src={"./assets/img/mk luffy/luffy1.png"} alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                        </div>
                    </div>

                    <div class="col-md-4 image-prop">
                        <div class="card">
                            <img src="./assets/img/mk luffy/luffy2.png" alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                        </div>
                    </div>

                    <div class="col-md-4 image-prop">
                            <div class="card">
                                <img src="./assets/img/mk luffy/luffy3.jpg" alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                            </div>
                        </div>

                    <div class="col-md-4 image-prop">
                        <div class="card">
                            <img src="./assets/img/mk luffy/luffy4.jpg" alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                        </div>
                    </div>

                    <div class="col-md-4 image-prop">
                        <div class="card">
                            <img src="./assets/img/mk luffy/luffy5.jpg" alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                        </div>
                    </div>

                    <div class="col-md-4 image-prop">
                        <div class="card">
                            <img src="./assets/img/mk luffy/luffy6.jpg" alt="Card image cap" style={{width: "350px", height: "350px"}}/>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

        <footer>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <img class="white-logo" src="assets/img/logo/logo-alterra-academy-plain@2x.png"/>
                        <p class="copyright">© copyright Alterra Group 2019</p>
                    </div>
                    <div class="col-6">
                        <p class="follow">Follow us on</p>
                        <div class="sosmed-box">
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-facebook@2x.png"/>Facebook</p>
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-twitter@2x.png"/>Twitter</p>
                            <p class=" sosmed"><img class="ikon" src="assets/img/ico/ico-instagram@2x.png"/>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div>
            <div class="container-fluid">
        <div class="row">
            <div class="col-6 left">
                <div class="warna"></div>
                    <img src="./assets/img/logo/logo-alterra-academy-plain@2x.png"
                    class="logo1"/>
            </div>
        
            <div class="col-6 right">
                <h4 style={{'margin-left': "20px"}}>Contact Us</h4><br/><br/>
                    <h6 style={{'margin-left': "20px"}}>Send us a message and we will get back to you as soon as possible</h6>
                        <form class="form-horizontal" role="form" style={{'margin-left': "20px"}}>
                                
                            <div class="form-group">
                                <label for="inlineFormInputGroup">Name<span style={{color: "#FF0031"}}>*</span></label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text" style={{'background-color':"white"}}>
                                        <img src="./assets/img/ico/ico-user@2x.png" style={{width:"16px", height: "19px"}}/>
                                      </div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="M. D. Luffy" style={{'border-left': "none"}}/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="inlineFormInputGroup">Email<span style={{color: "#FF0031"}}>*</span></label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text" style={{backgroundColor:"white"}}>
                                        <img src="./assets/img/ico/ico-email@2x.png" style={{width: "20px", height: "20px"}}/></div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="luffy@alpha.id" style={{'border-left': "none"}}/>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="inlineFormInputGroup">Phone Number<span style={{color: "#FF0031"}}>*</span></label>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text" style={{'background-color':"white"}}>
                                        <img src="./assets/img/ico/ico-phone@2x.png" style={{width:"16px", height: "24px"}}/></div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="08xxxxxxxxx" style={{'border-left': "none"}}/>
                                </div>
                            </div>

                            <span>National</span><br/>
                            <div class="dropdown-form-group">
                                    <button class="dropdown-toggle" style={{'background-color': "white", color: "#BEBEBE",
                                    margin: "10px 10px 0px 0px", 'text-align': "left", width: "100%", height: "43px"}} type="button" aria-labellendby="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select item...
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{'background-color': "white", width: "90%", height: "43px", color: "#BEBEBE"}}>
                                      <a class="dropdown-item" href="#" style= {{color: "#888888"}}>Indonesian</a>
                                      <a class="dropdown-item" href="#" style= {{color: "#888888"}}>Malaysian</a>
                                      <a class="dropdown-item" href="#" style= {{color: "#888888"}}>Singapore</a>
                                      <a class="dropdown-item" href="#" style= {{color: "#888888"}}>Japan</a>
                                    </div>
                            </div>
                                
                            <span>Message</span><br/>
                            <textarea name="" style={{width:"100%", height: "275px", margin: "10px 10px 0px 0px"}} placeholder= "Send a new message..."></textarea>

                            <button type="submit" class="btn submitbutton">Submit</button>
                        </form>
                
            </div>
        </div>
    </div>

      </div>
    );
  }
}

export default Contact;

// export default App;