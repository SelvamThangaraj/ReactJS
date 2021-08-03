import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
     <Header />
      <h1>Welcome to MyShop</h1>
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/product/:id" component={ProductScreen}/>
      <Footer />


     </Router>
      
     
    </div>
  );
}

export default App;
