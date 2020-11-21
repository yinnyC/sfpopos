import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Title from './Title/Title';
import About from './About/About'
import POPOSList from './POPOSList/POPOSList';
import POPOSDetails from './POPOSDetails/POPOSDetails'
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={POPOSList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={POPOSDetails} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
