import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _http:HttpClient,private _router:Router) { }
  ngOnInit(): void {
  }
  
  loginUser(username:string,password:string) {
    if (!(username && password )) {
      Swal.fire("Can't Add User With Empty Data");
      return;
    }
    else{
      let user=new User();
      user.username=username;
      user.password=password;
      this._http.post("http://localhost:3000/users/login", user).subscribe(
        (response: any) => {
          if(response){
            console.log(response);
            localStorage.setItem('token', response);
            if(this.isLoggedIN()){
              this._router.navigateByUrl('/home');
              Swal.fire("Logged IN Successfully");
            }else{
              Swal.fire("Your Are Not Saved In our Site, Please Sign-UP First");
            }
          }
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }
  isLoggedIN():boolean{
    let token= localStorage.getItem("token");
    return token!=null;
  }
  // login(token:string){
  //   localStorage.setItem("token",token);
  // }

  

}
