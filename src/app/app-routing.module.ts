import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './create-person/create-person.component';



const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'create', component: CreatePersonComponent },
  { path: 'edit/:id', component: CreatePersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
