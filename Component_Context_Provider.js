import React from 'react';
import ReactDOM from 'react-dom';

const EmployeeContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Id: 101,
        Name: 'Selvam Thangaraj'
      }
    };
  }

  changeEmpData=()=>{
    this.setState({data:{Id:102}});
  }

  render() {
    return <div>
      <h2>Welcome to App Component</h2>
      <p>
        <label>Employee Id : <b>{this.state.data.Id}</b></label>
      </p>
      <p>
        <button onClick={this.changeEmpData }>Change</button>
      </p>
      {/* Every Context object comes with a Provider React component 
      that allows consuming components to subscribe to context changes. 
      Context Provider Accepts a value property to be passed to consuming components
       that are descendants of this Provider. */}
      <EmployeeContext.Provider value={this.state.data}>
        <Employee />
      </EmployeeContext.Provider>
    </div>
  }
}

class Employee extends React.Component {
  static contextType = EmployeeContext;
  render() {
    return <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>Employee Id : <b>{this.context.Id}</b></label>
      </p>
      <Salary></Salary>
    </div>
  }
}

class Salary extends React.Component {
  static contextType = EmployeeContext;
  render() {
    return <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>Employee Id : <b>{this.context.Id}</b></label>
      </p>
    </div>
  }
}

const element = <App></App>

ReactDOM.render(element, document.getElementById('root'));
