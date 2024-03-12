import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
