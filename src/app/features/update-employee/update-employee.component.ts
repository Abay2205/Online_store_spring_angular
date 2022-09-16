import { Component, OnInit } from '@angular/core';
import {Employee} from "../../core/models/employee";
import {EmployeeService} from "../../core/service/employee.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployee();
    }, error => console.log(error))
  }
  goToEmployee(){
    this.router.navigate(['/employees'])
  }

}
