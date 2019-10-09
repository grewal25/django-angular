import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';




// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const routes: Routes=[
  {path:'', pathMatch: 'full', redirectTo:'auth'}
];




@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AuthModule,
    MainModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
