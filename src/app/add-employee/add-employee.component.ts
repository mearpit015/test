import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule
, FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { Employees } from '../models/employees';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() add = new EventEmitter<Employees>()
  emp : Employees=new Employees();
  constructor(private fb : FormBuilder,
     private _commonService: CommonService,
     private router : Router) { }
  empform = this.fb.group({
    id: [0],
    firstName: ['',[Validators.required, Validators.maxLength(50)]],
    lastName : ['',[Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    department: ['',[Validators.required, Validators.maxLength(5)]]
    })
  ngOnInit(): void {
  }
get firstName(){
  return this.empform.get('firstname');
}
 onSubmit(){
  // this._commonService.addEmp(this.empform.value).subscribe(d=>
    // {
    //  this.emp = d;
    //  this.router.navigate(["/employee"], { queryParams: { result: this.emp }});
    // });
  this.add.emit(this.empform.value);
  this.empform.reset();
  //console.log(this.empform.value);
}
}
