import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {
  //post={title:"",body:""}
  constructor(public posts:PostsService,private _http: HttpClient,private _formBuilder:FormBuilder,private _router:Router) { }
  //addPosts: Post[] = [];
  //formCreation:any;
  ngOnInit(): void {

  }

  addPOST(title:string,body:string) {
  
    if(!(title&&body)){
      Swal.fire("Can't Add Empty Post");
      return;
    }
    else{ 
      if(this.isLoggedIN()){
        const newwpost=new Post();
        newwpost.title=title;
        newwpost.body=body;

        this.posts.createPost(newwpost).subscribe(
          (response: any) => {
              console.log(response);
              Swal.fire("Post Added");
              this._router.navigateByUrl('/home');
            },
          (error) => {
            console.log(error);
          }
        )
      }else{
        Swal.fire("Please Register And LogIN To Be Aable To Create A post ");
        this._router.navigateByUrl('');
      }
  }
}

  isLoggedIN():boolean{
    let token= localStorage.getItem("token");
    return token!=null;
  }
  // post(title:string,body:string){
  //   const newwpost=new Post();
  //   newwpost.title=title;
  //   newwpost.body=body;

  //   const headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json')
  //   .set('Authorization' , ''+localStorage.getItem('token'));
  //   return this._http.post("http://localhost:3000/posts",{newwpost},{headers:headers , responseType: 'json'}).subscribe(
      
  //     (response: any) => {

  //       console.log("done")
  //       window.location.reload();
        
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //  }

    
  //add() {
    // if (!(firstName && lastName && age)) {
    //   Swal.fire("Can't Add Student With Empty Data");
    //   return;
    // }
    //else {
      // let student = new Student();
      // student.FirstName = firstName;
      // student.LastName = lastName;
      // student.Age = age;
      // student.Mobile = mobile;
      // student.Email = email;

     

  // get phone():any{
  //   return this.posts.addPost.get("tags")
  // }
//}

  // post(){
  // this.posts.post().subscribe(
  //   (res)=>{
  //   console.log(res);
  //  },
  //  (err)=>{
  //   console.log(err);
  //  }
  //  )
  // }

  // creatPost(){

  // }
}