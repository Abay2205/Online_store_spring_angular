import { Component, OnInit } from '@angular/core';
import {User} from "../../core/models/user";
import {UserService} from "../../core/service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.userService.createUser(this.user).subscribe(data => {
      this.goToUsers();
    }, error => console.log(error))
  }

  goToUsers(){
    this.router.navigate(["/users"])
  }

  onSubmit(){
    this.saveUser();
  }
}
