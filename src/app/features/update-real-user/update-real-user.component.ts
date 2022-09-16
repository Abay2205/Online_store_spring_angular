import { Component, OnInit } from '@angular/core';
import {RealUser} from "../../core/models/realUser";
import {RealUserService} from "../../core/service/real-user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-real-user',
  templateUrl: './update-real-user.component.html',
  styleUrls: ['./update-real-user.component.css']
})


export class UpdateRealUserComponent implements OnInit {
  id: number;
  user: RealUser = new RealUser();
  constructor(private realUserService: RealUserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.realUserService.getUserById(this.id).subscribe(data=>{
      this.user = data;
      console.log(data)
    }, error => console.log(error))
  }
  onSubmit(){
    this.realUserService.updateUser(this.id, this.user).subscribe(data => {
      this.goToUser();
    }, error => console.log(error))
  }
  goToUser(){
    this.router.navigate(['/realUsers'])
  }

}
