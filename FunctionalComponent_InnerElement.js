import React from 'react';
import ReactDOM from 'react-dom';

//Component name starts with Upper case, since React identify user defined component with upper case only
var DisplayEmployeeInfo=(employee) => {
  return (
    <div>
      <p>
        <label>Employee Id: <b>{employee.Id}</b></label>
      </p>
      <p>
        <label>Employee Name: <b>{employee.name}</b></label>
      </p>
      <p>
        <label>Employee Age: <b>{employee.age}</b></label>
      </p>
      <DepartmentInfo name="Science" location="chennai"></DepartmentInfo>
    </div>
    
  );
}

var DepartmentInfo=(dept)=>{
    <div>
        <p>
            <label> Department name:<b>{dept.name}</b></label>
        </p>
        <p>
            <label> Department location:<b>{dept.location}</b></label>
        </p>
    </div>
}

const element=<DisplayEmployeeInfo Id="103" name="Ravi" age="25"></DisplayEmployeeInfo>;
ReactDOM.render(element,document.getElementById('root'));
