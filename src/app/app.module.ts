import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule, FormBuilder, FormGroup
, ReactiveFormsModule, Validators, FormControl} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReduxConceptsComponent } from './redux-concepts/redux-concepts.component';
import { appStoreProviders } from './redux-provider/appstore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,

    UpdateemployeeComponent,
    AddEmployeeComponent,
    ReduxConceptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
