import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonCompornentComponent } from './person-compornent/person-compornent.component';
import { ChildCompornentComponent } from './child-compornent/child-compornent.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NotFound404Component } from './not-found404/not-found404.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
        {path: 'person-compornent', component: PersonCompornentComponent},
        {path: 'title-page', component: TitlePageComponent},
        {path: '', redirectTo: '/title-page', pathMatch: 'full'},
        {path: '**', component: NotFound404Component}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
