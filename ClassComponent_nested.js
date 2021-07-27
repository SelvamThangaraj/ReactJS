import React from 'react';
import ReactDOM from 'react-dom';

//Component name starts with Upper case, since React identify user defined component with upper case only
class Employee extends React.Component {
    render() {
        return <div>
            <p>
                <label>Employee Id: <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Employee Name: <b>{this.props.name}</b></label>
            </p>
            <p>
                <label>Employee Age: <b>{this.props.age}</b></label>
            </p>
            <Department name="Science" location="chennai"></Department>
        </div>
    }
}

class Department extends React.Component{
    render(){
        return <div>
        <p>
            <label> Department name:<b>{this.props.name}</b></label>
        </p>
        <p>
            <label> Department location:<b>{this.props.location}</b></label>
        </p>
    </div>
    }
}


const element = <Employee Id="104" name="Parthiban" age="25"></Employee>;
ReactDOM.render(element, document.getElementById('root'));
