import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayEmployess extends Component {
  constructor(props){
    super(props);
  }
    render(){
        return (
          <div className="container">
            <div className="notification">
            <table className="table table-light table-striped table-bordered">
          <tbody>
            <tr key="Header" className="table-danger">
              <th>
                <b>ID</b>
              </th>
              <th>
                <b>Name</b>
              </th>
              <th>
                <b>Salary</b>
              </th>
              <th>
                <b>Age</b>
              </th>
              <th>
                <b>Comments</b>
              </th>
              <th>
                <b>Options</b>
              </th>
            </tr>
              {this.props.employees.map(employee => (
                   <tr>
                      <td>{employee.id}</td>
                      <td>{employee.employee_name}</td>
                      <td>{employee.employee_salary}</td>
                      <td>{employee.employee_age}</td>
                      <td>{employee.comments}</td>
                      <td></td>
                   </tr>
              ))}
              </tbody>
        </table>           
            </div>
        </div>
        )
      }
}

function mapStateToProps(state){
    // state.counter means  - counter is key in reducer of index.js
    console.log(state)
    return {
      employees: state.employees
    };
  }
  export default connect(mapStateToProps)(DisplayEmployess);

