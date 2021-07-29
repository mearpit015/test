export class Employees {
  public  id : number=0;

  public  firstName : string ="";
  public  lastName :string ="";
  public  email : string ="";
  public  department : string ="";
}


export interface IEmployees{
  id : number;
  firstName : string;
  lastName :string ;
  email : string;
  department : string
}
