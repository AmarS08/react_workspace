import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://127.0.0.1:8080/api/employee";
class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }

    getEmployeeById(id) {
        console.log('Employee id = ' + id);
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    updateEmployee(employee, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee)
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new EmployeeService();