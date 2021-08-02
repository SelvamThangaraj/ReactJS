import ReactDOM from "react-dom";
import React, { Component } from "react";
import video from '../src/assets/Draft_1.mp4';

class QuantityIncrement extends React.Component{
  constructor(props){
    super(props);
    
    this.quantityRef=React.createRef();
  }

  incrementQuantity=()=>{
    this.quantityRef.current.value++;
  }
  render(){
    alert('Text Message');
    return(
      <div>
        <p>
          <label>Enter Quantity : <input type="text" ref={this.quantityRef}></input> 
          <button onClick={this.incrementQuantity}>+</button>
          </label>
        </p>
      </div>
    )
  }
}

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.userNameRef=React.createRef();
  }

  componentDidMount(){
    this.userNameRef.current.focus();
  }
 render(){
   return(
     <div>
       <h2>LogIn Screen...</h2>
       <p>
         <label>UserName : <input type="text" ref={this.userNameRef}></input></label>
       </p>
       <p>
         <label>PassWord : <input type="text"></input></label>
       </p>
       <button>LogIn</button>
     </div>
   );
 }
}

class VideoPlayer extends React.Component{
  constructor(props){
    super(props);
    this.videoRef=React.createRef();
  }

  playVideo=()=>{
    this.videoRef.current.play();
  }

  pauseVideo=()=>{
    this.videoRef.current.pause();
  }
  render(){
    return(
      <div>
        <video ref={this.videoRef} width="300" height="200" controls>
          <source src={video} type="video/mp4"></source>
        </video>
        <div>
           <button onClick={this.playVideo}>Play</button>  
           <button onClick={this.pauseVideo}>Pause</button>  
        </div>        
      </div>
    );
  }
}
const element=<QuantityIncrement></QuantityIncrement>
ReactDOM.render(element,document.getElementById("root"));