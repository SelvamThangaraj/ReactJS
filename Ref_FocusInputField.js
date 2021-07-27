import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      myAppData: '',            
    };
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleClear=this.handleClear.bind(this);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();    
  }

  handleUpdate(e){
    this.setState({
      myAppData: e.target.value
    });
  }

  handleClear(){
    this.setState({
      myAppData:'',
    });
    //Focus on the input field
    this.textInput.current.focus();
  }
  render(){
    return(
      <div>        
          <input value={this.state.myAppData} onChange={this.handleUpdate} ref={this.textInput}></input> 
          <button onClick={this.handleClear}>
            Clear
          </button>
          <h4>{this.state.myAppData}</h4>
      </div>
    );
  }
}

export default App;
