import ReactDOM from "react-dom";
import React, { Component } from "react";

function reportsHOC(InputComponent, inputData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data:[],
        columns:inputData.columns,
        header:inputData.header
      };
    }

    componentDidMount() {
      fetch(inputData.Url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });
        }
      );
    }

    render() {
      return (
      <Data data={this.state}></Data>
      );
    }
  };
}

class Data extends React.Component{
  constructor(props){
    super(props);
    //alert(JSON.stringify(props));
  }
  render(){
    return (
    <div>
        <h2>{this.props.data.header}...</h2>
        <table>
          <thead>
            <tr>
            {this.props.data.columns.map(c => (
              <th>{c}</th>
            ))}
            </tr>
          </thead>
          <tbody>
          {this.props.data.data.map(emp => (
            <tr key={emp.Id}>
              {this.props.data.columns.map(c => (
              <td>{emp[c]}</td>
            ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class Reports extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return(
      <div></div>
    );
    }
}

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employee:[]
    }
  }
}

const EmployeeReports=reportsHOC(Employee,
  {Url:'http://localhost:8080/api/emp', 
  columns:['id','name','location','salary'],header:'Employee Data'});

// const DeptReports=reportsHOC(Employee,{Url:'https://localhost:44306/api/Dept',
// columns:['Id','Name','Revenue'],header:'Dept Data'});

class AdminDashboard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <React.Fragment>
        <EmployeeReports></EmployeeReports>
        {/* <DeptReports></DeptReports> */}
      </React.Fragment>
    );
  }
}
const element=<AdminDashboard></AdminDashboard>
ReactDOM.render(element,document.getElementById("root"));