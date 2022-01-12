import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log-register/login/login.component';
import { RegisterComponent } from './log-register/register/register.component';
import { ShowpostsComponent } from './posts/showposts/showposts.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { UpdatepostsComponent } from './posts/updateposts/updateposts.component';

const routes: Routes = [
   { path: '', component: RegisterComponent },
   { path: 'home', component: ShowpostsComponent },
   { path: 'update/:id', component: UpdatepostsComponent },
   { path: 'home/:id', component: SinglepostComponent },
   { path: 'login', component: LoginComponent},
   { path: 'newPost', component: CreatepostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
