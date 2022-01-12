import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  PATH_OF_API = 'http://localhost:8080/EmployeeApp';
  constructor(private httpclient: HttpClient) {}

  public getEmployeesList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(
      this.PATH_OF_API + '/get-all-employee'
    );
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpclient.post(
      this.PATH_OF_API + '/create-new-employee',
      employee
    );
  }

  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.httpclient.get<Employee>(this.PATH_OF_API + '/' + employeeId);
  }

  updateEmployee(employeeId: string, employee: Employee): Observable<Object> {
    return this.httpclient.put<Employee>(
      this.PATH_OF_API + '/' + employeeId,
      employee
    );
  }

  deleteEmployee(employeeId: string): Observable<Object> {
    return this.httpclient.delete(this.PATH_OF_API + '/' + employeeId);
  }

  public getSortedEmployeesList(): Observable<any> {
    return this.httpclient.get<Employee>(this.PATH_OF_API + '/sort-emplyees');
  }
}
