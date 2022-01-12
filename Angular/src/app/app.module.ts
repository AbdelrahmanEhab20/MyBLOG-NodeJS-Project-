import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './log-register/login/login.component';
import { RegisterComponent } from './log-register/register/register.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { ShowpostsComponent } from './posts/showposts/showposts.component';
import { SinglepostComponent } from './posts/singlepost/singlepost.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationService } from './services/authentication.service';
import { UpdatepostsComponent } from './posts/updateposts/updateposts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreatepostComponent,
    ShowpostsComponent,
    SinglepostComponent,
    MaxLengthPipe,
    NavBarComponent,
    UpdatepostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
