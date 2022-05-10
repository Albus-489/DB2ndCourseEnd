import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSecurComponent } from './create-secur/create-secur.component';
import { CreateComponent } from './create/create.component';
import { ReadSecurComponent } from './read-secur/read-secur.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'read', component: ReadComponent},
  {path: 'create-secur', component: CreateSecurComponent},
  {path: 'read-secur', component: ReadSecurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
