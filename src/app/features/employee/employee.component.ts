import { Component, OnInit } from '@angular/core';
import {Employee} from "../../core/models/employee";
import {EmployeeService} from "../../core/service/employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(public employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployee()
  }

  private getEmployee() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    })
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
}
