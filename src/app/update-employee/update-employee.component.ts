import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId: string = '';
  employee: Employee = new Employee();
  constructor(
    private employService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    //console.log('this is the param: ' + this.employeeId);
    this.employService.getEmployeeById(this.employeeId).subscribe(
      (response) => {
        console.log('this is the response :' + response);
        this.employee = response;
      },
      (error) => console.log(console.error())
    );
  }

  onSubmit() {
    this.employService.updateEmployee(this.employeeId, this.employee).subscribe(
      (response) => {
        //console.log(response);
        this.gotoEmployeeList();
      },
      (error) => console.log(console.error())
    );
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee-list']);
  }
}
