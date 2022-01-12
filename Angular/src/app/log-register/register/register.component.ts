import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _http:HttpClient,private _router:Router) { }

  users: User[] = [];

  ngOnInit(): void {
  }

  registerUser(username:string,password:string,email:string) {
    if (!(username && password && email)) {
      Swal.fire("Can't Add User With Empty Data");
      return;
    }
    else{
      let user=new User();
      user.username=username;
      user.password=password;
      user.email=email;
      this._http.post("http://localhost:3000/users/register", user).subscribe(
        (response: any) => {
          if(response){
            console.log(user);
            this.users.push(user);
            Swal.fire("User Added");
            this._router.navigateByUrl('login')
          }
        },
        (error) => {
          console.log(error);
        }
      )
    }

  }
}
