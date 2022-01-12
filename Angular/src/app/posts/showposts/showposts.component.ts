import { Post } from './../../models/post';
import { PostsService } from './../../services/posts.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',
  styleUrls: ['./showposts.component.scss']
})
export class ShowpostsComponent implements OnInit {

  constructor(private posts : PostsService,private _http: HttpClient,private _formBuilder:FormBuilder,private _router:Router) { }

    
  allposts:any = [];

  ngOnInit(): void {
    this.getpostss();
  }

  getpostss(){
    this.posts.getposts().subscribe((response)=>{
      this.allposts = response;
      console.log(this.allposts);
    })
  }
  
  ShowPost(index: number) {
    if(this.isLoggedIN()){
      let post = this.allposts[index];
      console.log(post);
      this._router.navigateByUrl(`home/${post._id}`)
    }else{
      Swal.fire("Loggid IN Or Register First To Continue Reading");
    }
  }

  delete(id:any){
    if(this.isLoggedIN()){
      let post=this.allposts[id];
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization' , ''+localStorage.getItem('token'));
      
      this._http.delete("http://localhost:3000/posts"+'/'+id,{headers:headers , responseType: 'json'}).subscribe(
        (response: any) => {
          console.log("done");
          Swal.fire("POST DELETED");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      Swal.fire("Please Register Or Logged IN First");
    }
  }

  
  isLoggedIN():boolean{
    let token= localStorage.getItem("token");
    return token!=null;
  }
  // delete(index: number) {
  //   let student = this.students[index];
  //   student.IsDeleting = true;
  //   this._http.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${student.ID}`).subscribe(
  //     (response: any) => {
  //       if (response.Success) {
  //         this.students.splice(index, 1);
  //         Swal.fire(response.Message);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
