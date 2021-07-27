import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={date : new Date()};
    
  }

  tick(){
    //alert('hi');
    this.setState({date : new Date()});
  }

  componentDidMount(){
    //tick() method is called every 1 second
    this.timerID=setInterval(
      ()=>this.tick(),1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return(
      <div>
        <h1>Time in Chennai</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(  
  <App />,  
  document.getElementById('root')
);
