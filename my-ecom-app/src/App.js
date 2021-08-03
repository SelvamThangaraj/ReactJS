import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header></Header>
        <HomeScreen></HomeScreen>
        <Footer></Footer>
      </React.Fragment>
    </div>
  );
}

export default App;
