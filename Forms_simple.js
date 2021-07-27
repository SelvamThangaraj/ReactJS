import React from 'react';
import ReactDOM from 'react-dom';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        Id: '',
        Name: '',
        Location: '',
        Salary: ''
      }
    };

  }

   
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
   
    //... Spread Operator - contain all the previous property values
    //name of the property in the square brackets like [name]:value
    this.setState({
      employee:{
        ...this.state.employee,
        [name]: value
      }
    });

  }

  onCreateEmployee = () => {
    console.log(this.state.employee);
  }

  render() {
    return (
      <div>
        <form>
          <p>
            <label>Employee ID : <input type="text" name="Id" value={this.state.employee.Id}
              onChange={this.changeHandler} ></input>
            </label>
          </p>
          <p>
            <label>Employee Name : <input type="text" name="Name"
              value={this.state.employee.Name}
              onChange={this.changeHandler}></input>
            </label>
          </p>
          <p>
            <label>Employee Location : <input type="text" name="Location"
              value={this.state.employee.Location}
              onChange={this.changeHandler}></input>
            </label>
          </p>
          <p>
            <label>Employee Salary : <input type="text" name="Salary"
              value={this.state.employee.Salary}
              onChange={this.changeHandler}></input>
            </label>
          </p>
        </form>
        <button onClick={this.onCreateEmployee}>Create</button>
      </div>
    );
  }
}

const element = <EmployeeComponent></EmployeeComponent>

ReactDOM.render(element, document.getElementById('root'));
