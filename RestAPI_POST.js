import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // employees: [{"id":101,"name":"Ravi","location":"Bangalore","salary":"12345"},
      // {"id":102,"name":"Saravanan","location":"Chennai","salary":"23456"}]
      employees: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/emp")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        }
      );
  }

  onCreateEmployee = () => {
    let empInfo = {
      id: this.refs.Id.value,
      name: this.refs.Name.value,
      location: this.refs.Location.value,
      salary: this.refs.Salary.value
    };
    fetch('http://localhost:8080/api/newemp', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(empInfo)
    }).then(r => r.json()).then(res => {
      if (res) {
        console.log(res);
        this.setState({ message: 'New Employee is Created Successfully' });
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Employees Data...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.location}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h2>Please Enter Employee Details...</h2>
          <p>
            <label>Employee ID : <input type="text" ref="Id"></input></label>
          </p>
          <p>
            <label>Employee Name : <input type="text" ref="Name"></input></label>
          </p>
          <p>
            <label>Employee Location : <input type="text" ref="Location"></input></label>
          </p>
          <p>
            <label>Employee Salary : <input type="text" ref="Salary"></input></label>
          </p>
        </div>
        <button onClick={this.onCreateEmployee}>Create</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element, document.getElementById('root'));
