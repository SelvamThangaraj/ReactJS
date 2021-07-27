import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      myAppData: 'Initial data in Parent...',            
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      myAppData: "Updated from Child component...",
    });
  }
  render(){
    return(
      <div>        
          <Content myDataProp={this.state.myAppData}
                   updateStateProp={this.handleClick} > </Content>
			{/*Event Handler is passed as prop to child component*/}          
      </div>
    );
  }
}


class Content extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.myDataProp}</h2>
        <button onClick={this.props.updateStateProp}>
          Update
        </button>
      </div>
    );
  }
}
export default App;
