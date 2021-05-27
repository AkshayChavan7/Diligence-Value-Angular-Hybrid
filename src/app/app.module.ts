import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


// for AngularJS Compatibility
import {UpgradeModule} from '@angular/upgrade/static';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  // added for AngularJS
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    // this.upgrade.bootstrap(document.documentElement, ['myApp']);
  }
  
 }
