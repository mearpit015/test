import { Component, OnInit } from '@angular/core';
import { CommonService } from '../app/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  islogedIn : boolean = false;

  constructor(private _common: CommonService) {

  }

ngOnInit(){
this.islogedIn =this.checkUserLoggein();
}
checkUserLoggein(){
  this.islogedIn = Boolean(this._common.checkUserLoggedIn());
  return this.islogedIn;
}
loginSubmit(flag : boolean){
this.islogedIn = flag;
//console.log(flag);
}
logOut(){
  this.islogedIn = Boolean(this._common.checkUserLoggedIn(true));
  return this.islogedIn;
}

}
