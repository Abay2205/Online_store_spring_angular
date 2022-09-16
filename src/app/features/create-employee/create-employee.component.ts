import { Component, OnInit } from '@angular/core';
import {Employee} from "../../core/models/employee";
import {EmployeeService} from "../../core/service/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.goToEmployees();
    }, error => console.log(error))
  }

  goToEmployees(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.saveEmployee();
  }

}
