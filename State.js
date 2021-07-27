import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component { 
    state={
        counter:0
    }
    addEmployee =()=>{
        this.setState({
            counter:this.state.counter+1
        });        
    }   
    render() {
        return <div>
            <h1>
                <label><b>Employee Details</b></label>
            </h1>
            <button onClick={this.addEmployee}>Add employee</button>
            <div>
                <label>Add employee button is clicked <b>{this.state.counter}</b> times </label>
            </div>
        </div>
    }
}

const element = <Employee></Employee>;

ReactDOM.render(element, document.getElementById('root'));
