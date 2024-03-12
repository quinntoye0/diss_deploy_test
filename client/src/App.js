import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import CreateAccount from './components/pages/CreateAccount';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/sign-in' element={ <SignIn />} />
            <Route path='/create-account' element={ <CreateAccount />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }

}

export default App;


    
// this.Navbar = this.Navbar.bind(this);
// this.Home = this.Home.bind(this);
// this.SignIn = this.SignIn.bind(this);
// this.CreateAccount = this.CreateAccount.bind(this);
// this.Footer = this.Footer.bind(this);


// <div className="App">
//   <header className="App-header">
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">{this.state.apiResponse}</p>
// </div>
