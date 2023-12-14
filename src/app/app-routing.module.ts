import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvatationComponent } from './invatation/invatation.component';
import { InvatationGroomComponent } from './invatation-groom/invatation-groom.component';
import { InvatationBrideComponent } from './invatation-bride/invatation-bride.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/khwedding' ,pathMatch: "full"
  },
  {
    path: 'khwedding',
    component: HomeComponent
  },
  {
    path: 'invitation',
    component: InvatationComponent
  },
  {
    path: 'groom',
    component: InvatationGroomComponent
  },
  {
    path: 'bride',
    component: InvatationBrideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
