import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  GoCreate(){
      if(this.isLoggedIN()){
        this.route.navigateByUrl('newPost');
      }
     else{
      Swal.fire("YOUR ARE NOT LOGGID IN TO Do This Action,Register Or Login First");
     }
  }

  logout(){
    if(this.isLoggedIN()){
      localStorage.removeItem("token");
      console.log("Token Deleted");
      this.route.navigateByUrl('');
    }
   else{
     Swal.fire("YOUR ARE NOT LOGGID IN TO Do This Action,Register Or Login First");
   }
  }

  isLoggedIN():boolean{
    let token= localStorage.getItem("token");
    return token!=null;
  }
}
