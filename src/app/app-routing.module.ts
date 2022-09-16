import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeComponent} from "./features/employee/employee.component";
import {CreateEmployeeComponent} from "./features/create-employee/create-employee.component";
import {UserComponent} from "./features/user/user.component";
import {CreateUserComponent} from "./features/create-user/create-user.component";
import {ProductsComponent} from "./features/products/products.component";
import {UpdateProductComponent} from "./features/update-product/update-product.component";
import {CreateProductComponent} from "./features/create-product/create-product.component";
import {UpdateEmployeeComponent} from "./features/update-employee/update-employee.component";
import {UpdateUserComponent} from "./features/update-user/update-user.component";
import {EmployeeDetailsComponent} from "./features/employee-details/employee-details.component";
import {LoginComponent} from "./login/login.component";
import {RealUserComponent} from "./features/real-user/real-user.component";
import {CreateRealUserComponent} from "./features/create-real-user/create-real-user.component";
import {UpdateRealUserComponent} from "./features/update-real-user/update-real-user.component";
import {ProductsCardsComponent} from "./products-cards/products-cards.component";




const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "employees", component: EmployeeComponent},
  {path: "create-employee", component: CreateEmployeeComponent},
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: "users", component: UserComponent},
  {path: "create-user", component: CreateUserComponent},
  {path: "products", component: ProductsComponent},
  {path: "create-product", component: CreateProductComponent},
  {path: "update-product/:id", component: UpdateProductComponent},
  {path: "update-employee/:id", component: UpdateEmployeeComponent},
  {path: "update-user/:id", component: UpdateUserComponent},
  {path: "employee-details/:id", component: EmployeeDetailsComponent},
  {path: "realUsers", component: RealUserComponent},
  {path: "create-realUser", component: CreateRealUserComponent},
  {path: "update-realUser/:id", component: UpdateRealUserComponent},
  {path: "products-cards", component: ProductsCardsComponent},



]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
