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
      </div>
    );
  }
}

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element, document.getElementById('root'));
