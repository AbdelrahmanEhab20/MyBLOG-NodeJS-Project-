import { environment } from './../../environments/environment';
import {HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  url:string='http://localhost:3000'

  constructor(private http: HttpClient,private fb: FormBuilder) { }

  
  //GET POSTS
  getposts(){
    return this.http.get(this.url+'/posts');
  }
 //GET POSTS byid
 getpostsByID(id:any){
  return this.http.get(this.url+`/posts/${id}`);
}

  //create Post
  createPost(body:any){
    return this.http.post(this.url+`/posts`,body);
  }

  //Update Post
  updatePost(body:any,id:any){
  return this.http.put(this.url+`/posts/${id}`,body);
  }
  
//delete Post
  deletePost(id:any){
  return this.http.delete(this.url+`/posts/${id}`);
  } 


  // ADD POST
  addPost = new FormGroup({
    title: new FormControl(""),
    tags: this.fb.array([
      this.fb.control("")
    ]),
    body: new FormControl(""),
  })

  // get tags() {
  //   return this.addPost.get("tags") as FormArray
  // }
 
  // addTag() {
  //   this.tags.push(this.fb.control(""))
  // }

  // sub(){
  //   console.log(this.addPost.value);
  // }
  
  post(){
    return this.http.post(environment.API_KEY ,this.addPost.value );
  }
}