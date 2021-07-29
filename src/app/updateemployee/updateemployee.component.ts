import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule
  , FormControl, FormGroup} from '@angular/forms'
  import { Router } from '@angular/router';

  import { Employees } from '../models/employees';
  import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {
  @Input() editValue : Employees = new Employees();
  @Output() update = new EventEmitter<Employees>()
  emp : Employees=new Employees();
  constructor(private fb : FormBuilder,
    private _commonService: CommonService,
    private router : Router) { }
  empform = this.fb.group({
    id: [this.editValue.id],
    firstName: [this.editValue.firstName,[Validators.required, Validators.maxLength(50)]],
    lastName : [this.editValue.lastName,[Validators.required, Validators.maxLength(50)]],
    email: [this.editValue.email, [Validators.required, Validators.email]],
    department: [this.editValue.department,[Validators.required, Validators.maxLength(5)]]
    })
  ngOnInit(): void {
    console.log(this.editValue);
    this.empform.patchValue({
      id:this.editValue.id,
      firstName: this.editValue.firstName,
      lastName: this.editValue.lastName,
      email:  this.editValue.email,
      department: this.editValue.department
    });
  }

 onSubmit(){
  this.update.emit(this.empform.value);
    this.empform.reset();
  }

}
