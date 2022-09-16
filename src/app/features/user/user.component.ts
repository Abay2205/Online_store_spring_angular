import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/service/user.service";
import {User} from "../../core/models/user";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
    public userService: UserService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }
  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data)
      this.getUser()
    })
  }
  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }
}

