import { Component } from '@angular/core';
import {Router} from "@angular/router";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private router:Router
  title = 'Crud2';
  currentUser = localStorage.getItem("CURRENT_USER1")
  roleName = localStorage.getItem("role")
  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["login"]).then(() => {
      window.location.reload();
    })
    localStorage.removeItem("CURRENT_USER1");
    localStorage.removeItem("role");
  }






}
