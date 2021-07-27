import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component { 
    addEmployee =()=>{
        alert("New Employee added");
    }   
    render() {
        return <div>
            <h1>
                <label><b>Employee Details</b></label>
            </h1>
            <button onClick={this.addEmployee}>Add employee</button>
            
        </div>
    }
}

const element = <Employee></Employee>;

ReactDOM.render(element, document.getElementById('root'));
