import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { HttpHeaders} from '@angular/common/http';
import {Employee} from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  BaseUrl =  'http://localhost:5000/api';
    constructor(private http: Http) { }
  getEmployees()  {
  return this.http.get(`${this.BaseUrl}/employee`);
  }

  getEmployee(empID: number)  {
    return this.http.get(`${this.BaseUrl}/employee/` + empID);
    }
    addEmployees(Employeearg: any )  {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
    return this.http.post(`${this.BaseUrl}/employee`, JSON.stringify(Employeearg), {
      headers: headers
  } );
    }

    updateEmployee(Employeearg: Employee) {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });
      return this.http.put(`${this.BaseUrl}/employee/` + Employeearg.empID, JSON.stringify(Employeearg), {
        headers: headers
    } );
    }
    deleteEmployee(Employeearg: string) {
      return this.http.delete(`${this.BaseUrl}/employee/` + Employeearg);
    }
  }


