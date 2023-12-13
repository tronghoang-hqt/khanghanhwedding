import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvatationComponent } from './invatation/invatation.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/wedding' ,pathMatch: "full"
  },
  {
    path: 'wedding',
    component: HomeComponent
  },
  {
    path: 'invitation',
    component: InvatationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
