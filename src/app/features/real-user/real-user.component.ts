import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RealUser} from "../../core/models/realUser";
import {RealUserService} from "../../core/service/real-user.service";

@Component({
  selector: 'app-realUser',
  templateUrl: './real-user.component.html',
  styleUrls: ['./real-user.component.css']
})
export class RealUserComponent implements OnInit {

  users: RealUser[];

  constructor(
    public userService: RealUserService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser() {
    this.userService.getUsers().subscribe((data: RealUser[]) => {
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
    this.router.navigate(["update-realUser", id]);
  }
}
