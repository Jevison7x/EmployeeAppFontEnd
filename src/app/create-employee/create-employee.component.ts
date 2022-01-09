import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (response) => {
        console.log(response);
        this.gotoEmployeeList();
        //this.employees = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee-list']);
  }

  onSubmit() {
    this.saveEmployee();
    console.log(this.employee);
  }
}
