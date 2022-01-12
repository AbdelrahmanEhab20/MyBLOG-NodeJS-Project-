import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateposts',
  templateUrl: './updateposts.component.html',
  styleUrls: ['./updateposts.component.scss']
})
export class UpdatepostsComponent implements OnInit {

  constructor(public route:ActivatedRoute,public posts:PostsService,private _http:HttpClient,private _router:Router) { }
  myID:any=0 ;
  post:any;

  allposts:Post[] = [];

  ngOnInit(): void {
    this.myID = this.route.snapshot.paramMap.get("id");
    console.log(this.myID);
    let post=new Post();

    this.route.paramMap.subscribe(
      params => {
        this.posts.getpostsByID(this.myID).subscribe(
          (response: any) => {
            this.post = response;
            console.log(this.post);
      }
    );
  });
  }

  delete(id:any){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization' , ''+localStorage.getItem('token'));
    
     this._http.delete("http://localhost:3000/posts"+'/'+id,{headers:headers , responseType: 'json'}).subscribe(
       
      (response: any) => {
        console.log("done")
        this._router.navigateByUrl(`home`)
      },
      (error) => {
        console.log(error);
      }
    );
   }

   update(title:string,body:string) {
 // let student = this.students[index];
  //this._router.navigateByUrl(`/details/${student.ID}`)
  let post = new Post();
  post.title=title;
  post.body=body
  this._http.patch(`http://localhost:3000/posts/${this.myID}`, post).subscribe(
    (response: any) => {
        console.log(response);
        Swal.fire("POST UPDATED");
        this._router.navigateByUrl('home');
      }
    ,
    (error) => {
      console.log(error);
    }
    );
  }
}
