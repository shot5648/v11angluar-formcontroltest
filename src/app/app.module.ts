import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonCompornentComponent } from './person-compornent/person-compornent.component';
import { ChildCompornentComponent } from './child-compornent/child-compornent.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NotFound404Component } from './not-found404/not-found404.component';

import { MatInputModule } from '@angular/material/input';
// Create SPA
import { RouterModule } from '@angular/router';
// mat-icon
import { MatIconModule } from '@angular/material/icon';
import { HeaderNavComponent } from './header-nav/header-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonCompornentComponent,
    ChildCompornentComponent,
    TitlePageComponent,
    NotFound404Component,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
