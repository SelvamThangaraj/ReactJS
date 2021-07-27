import React from 'react';
import ReactDOM from 'react-dom';

const employees = [
  { Id: 101, Name: 'Parthiban', Location: 'Bangalore', Salary: 12345 },
  { Id: 102, Name: 'Balu', Location: 'Chennai', Salary: 23456 },
  { Id: 103, Name: 'Sridhar', Location: 'Bangalore', Salary: 34567 }
];

var Employees=(props)=>{
//function Employees(props) {
  const list = props.employeeList;

  // It is important to pass the Key to each Element with in this map method.
  // Keys help React identify which items have changed, are added, or are removed.
  const listElements = list.map((emp) =>
    <Employee key={emp.Id} data={emp} />
  );

  return (<div>
             {listElements}
         </div>
  );

}

var Employee=(props)=>{
//function Employee(props) {
  return <div style={{ border: "3px solid red" }}>
    <p>Employee ID : <b>{props.data.Id}</b></p>
    <p>Employee Name : <b>{props.data.Name}</b></p>
    <p>Employee Location : <b>{props.data.Location}</b></p>
    <p>Employee Salary : <b>{props.data.Salary}</b></p>
  </div>;
}


const element = <Employees employeeList={employees}></Employees>

ReactDOM.render(element, document.getElementById('root'));
