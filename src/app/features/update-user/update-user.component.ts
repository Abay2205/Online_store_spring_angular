import { Component, OnInit } from '@angular/core';
import {User} from "../../core/models/user";
import {UserService} from "../../core/service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  user: User = new User();
  constructor(private userSerivce: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userSerivce.getUserById(this.id).subscribe(data=>{
      this.user = data;
    }, error => console.log(error))
  }
  onSubmit(){
    this.userSerivce.updateUser(this.id, this.user).subscribe(data => {
      this.goToUser();
    }, error => console.log(error))
  }
  goToUser(){
    this.router.navigate(['/users'])
  }

}
