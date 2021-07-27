import React from 'react';
import ReactDOM from 'react-dom';

//Component name starts with Upper case, since React identify user defined component with upper case only
class Employee extends React.Component {
    render() {
        <div>
            <p>
                <label>Employee Id: <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Employee Name: <b>{this.props.name}</b></label>
            </p>
            <p>
                <label>Employee Age: <b>{this.props.age}</b></label>
            </p>
            <DepartmentInfo name="Science" location="chennai"></DepartmentInfo>
        </div>
    }
}


const element = <Employee Id="103" name="Ravi" age="25"></Employee>;
ReactDOM.render(element, document.getElementById('root'));
