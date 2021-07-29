import { Output , EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() isloggedinclick= new EventEmitter<boolean>();
  constructor(private _common: CommonService) {

  }

  ngOnInit(): void {
  }
  async OnSubmitForm(form : any){
    await this._common.login(form.uname, form.psw);
    this.isloggedinclick.emit(Boolean(this._common.checkUserLoggedIn()));
  }

}
