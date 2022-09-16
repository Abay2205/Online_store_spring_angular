import {Component, OnInit} from '@angular/core';
import {JwtClientService} from "../core/service/jwt-client.service";
import {Router} from "@angular/router";
import {UserService} from "../core/service/user.service";
import {RealUserService} from "../core/service/real-user.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import {RealUser} from "../core/models/realUser";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: RealUser[];

  constructor(private service: JwtClientService,
              private router: Router,
              private userService: UserService,
              private realUserService: RealUserService,
              private jwtHelper :JwtHelperService) {
  }

  username: string;
  password: string;
  response: any;
  tokenPayload: any;
  expToken: any;

  ngOnInit(): void {
  }

  login(authRequest: object) {
    this.getAccessToken(authRequest)
  }


public getAccessToken(authRequest: object) {
    this.service.generateToken(authRequest).subscribe((data: any) => {
      let tokenStr = "Bearer " + data.body.access_token;
      this.expToken = data.body.access_token;
      this.GetTokenDecoded()
      localStorage.setItem("token", tokenStr)
        this.router.navigate(["users"]).then(() => {
          window.location.reload();
        });
      })
  }
  GetTokenDecoded(){
    console.log(this.jwtHelper.decodeToken(this.expToken).sub)
    localStorage.setItem("CURRENT_USER1",this.jwtHelper.decodeToken(this.expToken).sub)
    localStorage.setItem("role",this.jwtHelper.decodeToken(this.expToken).roles[0])
   this.tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(this.expToken));
  }
  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.expToken);
  }

}
