import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      header: 'Coming from Header',
      content: 'Coming from content',
      toggleOn: false,      
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      toggleOn: !this.state.toggleOn,
    });
  }
  render(){
    return(
      <div>
          <Header value={this.state.header}></Header> 
          <Content value={this.state.content}> </Content>
          <button onClick={this.handleClick}>
              {this.state.toggleOn? 'On' : 'Off'}
          </button>
      </div>
    );
  }
}

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1>{this.props.value}</h1>
    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <h2>{this.props.value}</h2>
    );

  }
}
export default App;
