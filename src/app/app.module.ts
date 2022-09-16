import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserComponent } from './features/user/user.component';
import { EmployeeComponent } from './features/employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './features/create-employee/create-employee.component';
import {FormsModule} from "@angular/forms";
import { CreateUserComponent } from './features/create-user/create-user.component';
import { ProductsComponent } from './features/products/products.component';
import { UpdateProductComponent } from './features/update-product/update-product.component';
import { CreateProductComponent } from './features/create-product/create-product.component';
import { UpdateEmployeeComponent } from './features/update-employee/update-employee.component';
import { UpdateUserComponent } from './features/update-user/update-user.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';
import {SecurePipe} from "./core/models/secure.pipe";
import {RequestInterceptor} from "./core/models/request.interceptor";
import { TextFilterPipe } from './core/models/text-filter.pipe';
import { LoginComponent } from './login/login.component';
import { RealUserComponent } from './features/real-user/real-user.component';
import { CreateRealUserComponent } from './features/create-real-user/create-real-user.component';
import { UpdateRealUserComponent } from './features/update-real-user/update-real-user.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsCardsComponent } from './products-cards/products-cards.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    CreateUserComponent,
    ProductsComponent,
    UpdateProductComponent,
    CreateProductComponent,
    UpdateEmployeeComponent,
    UpdateUserComponent,
    EmployeeDetailsComponent,
    SecurePipe,
    TextFilterPipe,
    LoginComponent,
    RealUserComponent,
    CreateRealUserComponent,
    UpdateRealUserComponent,
    NavbarComponent,
    ProductsCardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
