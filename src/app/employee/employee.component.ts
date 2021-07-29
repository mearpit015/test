import { Route } from '@angular/compiler/src/core';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Employees, IEmployees} from '../models/employees'
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp : Employees[]=[];
  isaddClick:boolean=false;
  isUpdateClick :  boolean = false;
  employee: Employees = new Employees();
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'action'];
  constructor(private _common: CommonService,
    private activateroute : ActivatedRoute,
    private _router: Router) {
      // this.activateroute.queryParams.subscribe(r=>{
      // });

  }

  ngOnInit(): void {
    this.getAllActiveEmployee();
  }
  async getAllActiveEmployee(){

    await this._common.getAllActiveEmployee()
    .subscribe(data => this.emp = data);
  }

   removeClick(id : number){
     this.isaddClick=false;
     this.isUpdateClick = false;
    if(id > 0){
     const result =  this._common.removeClick(id)
     if(Boolean(result) == true){
       this.getAllActiveEmployee();
     }
    }
  }

  onAddClick(){
    //this._router.navigateByUrl('/employee/addEmployee');
    this.isaddClick =true;
    this.isUpdateClick = false;
  }
  onUpdateClick(id : number){
   this._common.getEmployeeById(id).subscribe({
     next: data=>{
        this.employee = data;
        this.isaddClick =false;
        this.isUpdateClick = true;
     },
     error: err=>{

     }
   });

  }
  addEmployee(employees :Employees){
    this.isUpdateClick = false;
    this._common.addEmp(employees).subscribe({

      next:d=>{
        this.emp.push(d)
       },
       error : erorr=>{
         console.log("list bind"+erorr);
       }
   });
   this.isaddClick = false;
  }
  updateEmployee(employees :Employees){
    this.isaddClick = false;
    this._common.updateEmployee(employees).subscribe({

      next:d=>{
        if(d==true){
          this.getAllActiveEmployee();
        }
        },
       error : erorr=>{
         console.log("list bind"+erorr);
       }
   });
    this.isUpdateClick = false;
  }

}
