import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import CreateAccount from './components/pages/CreateAccount';

function App() {

    return (
      <>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/sign-in' element={ <SignIn />} />
            <Route path='/create-account' element={ <CreateAccount />} />
          </Routes>
          

        </Router>
      </>
    );
  // }

}

export default App;


    
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };  // NOT IN USE HERE (maybe?)
//   }

  /* THESE ARE NOT CURRENTLY IN USE HERE */
  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // callDB() {
  //   fetch("http://localhost:9000/testDB")
  //       .then(res => res.text())
  //       .then(res => this.setState({ dbResponse: res }))
  //       .catch(err => err);
  // }

  // componentDidMount() {
  //   this.callAPI();
  // }

  // render() {
  // }
