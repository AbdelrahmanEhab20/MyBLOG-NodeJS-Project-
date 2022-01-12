import { environment } from './../../../environments/environment';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.scss']
})
export class SinglepostComponent implements OnInit {

  constructor(public route:ActivatedRoute,public posts:PostsService,private _http:HttpClient,private _router:Router) { }
  myID:any=0 ;
  post:any;

  allposts:Post[] = [];

 //GET POSTS byid
//  getpostsByID(id:any){
//   return this.http.get(this.url+`/posts/${id}`);
// }
  
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

 updateBTN(){
  this._router.navigateByUrl(`update/${this.myID}`);
}
} 


//update(index: number) {
 // let student = this.students[index];
  //this._router.navigateByUrl(`/details/${student.ID}`)
  // let student = this.students[index];
  // this._http.put(`https://api.mohamed-sadek.com/Student/Put`, student).subscribe(
  //   (response: any) => {
  //     if (response.Success) {
  //       console.log(response);
  //       alert(response.Message);
  //     }
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
//}
 //  // this.getPostById();
  //   this.posts.getpostsByID(this.myID).subscribe(
  //         response =>{
  //         this.post = response;
  //       })
  //       this.route.paramMap.subscribe((params) =>{
  //         this.myID = params.get("id");
  //         console.log(this.myID);

  //         const headers = new HttpHeaders()
  //         .set('Content-Type', 'application/json')
  //         .set('Authorization' , ''+localStorage.getItem('token'));
  //        this._http.get("http://localhost:3000/posts"+'/'+this.myID,{headers:headers , responseType: 'json'}).subscribe(
  //         (response: any) => {
  //           this.allposts = response;
  //           console.log(this.allposts );
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //       })





// getPostById(){
//   // this.posts.getpostsByID(this.myID).subscribe(
//   //   response =>{
//   //   this.post = response;
//   // })
//   this.route.paramMap.subscribe((params) =>{
//     this.myID = params.get("id");
//     console.log(this.myID);
//     const headers = new HttpHeaders()
//     .set('Content-Type', 'application/json')
//     .set('Authorization' , ''+localStorage.getItem('token'));
//    this._http.get(environment.API_KEY+'/'+this.myID,{headers:headers , responseType: 'json'}).subscribe(
     
//     (response: any) => {

//       this.allposts = response;
//       console.log(this.allposts );
      
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   })
// }

// update(index: number) {
//   let student = this.allposts[index];
//   this._http.patch(`http://localhost:3000/posts/:${index}`, student).subscribe(
//     (response: any) => {
//         console.log(response);
//         this.allposts = response;
//         Swal.fire("Post Updated");
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
// }
