import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import withNavigateHook from './withNavigateHook';

class ListEmployeeComponent extends Component {
    constructor(props) {
        
        super(props);

        this.state = {
            employees: []
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    editEmployee(id) {
        console.log('Employee id = ' + id);
        this.props.navigation(`/update-employee/${id}`);
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>

                <div className='row'>
                    <div>
                        <Link to='/create-employee' className='btn btn-primary btn-lg'>Create Employee</Link>
                    </div>
                    
                </div>
                <div className='row mt-3'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Salary</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.empId}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.address}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.empId)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.empId)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(ListEmployeeComponent);