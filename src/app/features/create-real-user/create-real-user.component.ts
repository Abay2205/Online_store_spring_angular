import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {RealUserService} from "../../core/service/real-user.service";
import {RealUser} from "../../core/models/realUser";

@Component({
  selector: 'app-create-realUser',
  templateUrl: './create-real-user.component.html',
  styleUrls: ['./create-real-user.component.css']
})
export class CreateRealUserComponent implements OnInit {

  user: RealUser = new RealUser();

  constructor(private realUserService: RealUserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.realUserService.createUser(this.user).subscribe(data => {
      this.goToUsers();
    }, error => console.log(error))
  }

  goToUsers(){
    this.router.navigate(["/realUsers"])
  }

  onSubmit(){
    this.saveUser();
  }
}
