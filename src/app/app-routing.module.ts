import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActivitiesComponent } from './activities/activities.component';
import { Activity1Component } from './activities/activity1/activity1.component';
import { Activity2Component } from './activities/activity2/activity2.component';
import { Activity3Component } from './activities/activity3/activity3.component';
import { Activity11Component } from './activities/activity1/activity11/activity11.component';
import { Activity12Component } from './activities/activity1/activity12/activity12.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'activities',
    component: ActivitiesComponent,
    //Once subroute system is defined router searches for the closest router outlet (activities component)
    children: [
      {
        path: 'activity1',
        component: Activity1Component,
        children: [
          { path: 'activity11', component: Activity11Component },
          { path: 'activity12', component: Activity12Component },
        ],
      },
      { path: 'activity2', component: Activity2Component },
      { path: 'activity3', component: Activity3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
