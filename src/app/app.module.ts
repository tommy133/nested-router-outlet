import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActivitiesComponent } from './activities/activities.component';
import { Activity1Component } from './activities/activity1/activity1.component';
import { Activity2Component } from './activities/activity2/activity2.component';
import { Activity3Component } from './activities/activity3/activity3.component';
import { Activity11Component } from './activities/activity1/activity11/activity11.component';
import { Activity12Component } from './activities/activity1/activity12/activity12.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ActivitiesComponent,
    Activity1Component,
    Activity2Component,
    Activity3Component,
    Activity11Component,
    Activity12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
