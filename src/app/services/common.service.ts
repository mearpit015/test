import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Employees,IEmployees } from '../models/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loginToken : string ="";
  apiUrl = "http://localhost:5000/api/Employee/";
  emp : any=[];

  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  async login(userName: string, pwd: string){
  // const headers = new HttpHeaders().append('header', 'value');
  // let params = new HttpParams();
  // params.append("UserName", userName)
  // params.append("Password", pwd)
  await this.http.get(this.apiUrl+'checkUser', {

    params: {
      UserName: userName,
      Password: pwd
    },
   // observe: 'response',

  })
  .toPromise()
  .then(response => {
    //console.log(response);
    localStorage.setItem('isloggedIn', response.toString());
    return Boolean(response.toString());
  })
  .catch(console.log);


  }

  checkUserLoggedIn(isLogoutClicked? : boolean){
    if(isLogoutClicked==true){
      return false;
    }
    else{
      const isloggedIn = localStorage.getItem("isloggedIn");
      return isloggedIn == 'true' ? true : false;
    }
  }
    getAllActiveEmployee(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }
 async removeClick(id: number){
    await   this.http.delete(this.apiUrl+"remove",
       {
         params:{
            Id: id
         }
       }).toPromise()
       .then(res=>{
        console.log(res);
         return res.toString()
       })
       .catch(console.log);
  }
  addEmp(employee : Employees)
  //: Observable<Employees>
  {

   return this.http.post<Employees>(this.apiUrl+"addEmp", employee, this.httpOptions);
   // this.http.post<Employees>(this.apiUrl+"addEmp", employee, this.httpOptions).subscribe({
    // next: data => {
    // debugger;
    //   this.emp = data;
    // },
    // error: error => {

    // console.error('There was an error!', error.message);
    // }

  //});
   // return this.emp;


  }

  updateEmployee(employee: Employees){
    return this.http.post<boolean>(this.apiUrl+"updateEmp", employee, this.httpOptions);
  }
  getEmployeeById(id: number){
   return  this.http.get<Employees>(this.apiUrl+"getEmployeeById",
    {
      params:{
      Id: id
    }
   });
  }
}
