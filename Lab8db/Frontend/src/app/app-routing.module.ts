import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'show', component: ShowComponent},
  {path: 'create', component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
