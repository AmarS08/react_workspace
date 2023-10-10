import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import withNavigateHook from './withNavigateHook';
export class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            name: '',
            age: '',
            salary: '',
            address: ''
        }

        this.changeEmpIdHandler = this.changeEmpIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {empId: this.state.empId, name: this.state.name, age: this.state.age,
                        salary: this.state.salary, address: this.state.address
        };
        console.log('Employee input data = ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
                //this.props.history.push('/employees');
                this.props.navigation('/employees');
        });
    }

    changeEmpIdHandler = (event) => {
        this.setState({empId: event.target.value});
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }
    changeSalaryHandler = (event) => {
        this.setState({salary: event.target.value});
    }
    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3 mt-3'>
                            <h2 className='text-center'>Create Employee</h2>
                            <div className='card-body' >
                                <form method="POST">
                                    <div className='form-group mt-3'>
                                        <label>Employee ID</label>
                                        <input placeholder='Employee Id' name='empid' className='form-control'
                                        value={this.state.empId} onChange={this.changeEmpIdHandler}/>
                                    </div>

                                    <div className='form-group mt-3'>
                                        <label>Name</label>
                                        <input placeholder='Name' name='name' className='form-control'
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>

                                    <div className='form-group mt-3'>
                                        <label>Age</label>
                                        <input placeholder='Age' name='age' className='form-control'
                                        value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>

                                    <div className='form-group mt-3'>
                                        <label>Salary</label>
                                        <input placeholder='Salary' name='salary' className='form-control'
                                        value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>

                                    <div className='form-group mt-3'>
                                        <label>Address</label>
                                        <input placeholder='Address' name='address' className='form-control'
                                        value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className='mt-3'>
                                        <button className='btn btn-success' onClick={this.saveEmployee}>Create Employee</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(CreateEmployeeComponent);