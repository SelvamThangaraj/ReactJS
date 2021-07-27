import React from 'react';
import ReactDOM from 'react-dom';

function DisplayEmployeeInfo(employee) {
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
    </div>
  );
}

ReactDOM.render(
  <DisplayEmployeeInfo Id="103" name="Ravi" age="25"></DisplayEmployeeInfo>,
  document.getElementById('root')
);

// const element=<DisplayEmployeeInfo Id="103" name="Ravi" age="25"></DisplayEmployeeInfo>;
// ReactDOM.render(element,document.getElementById('root'));
