import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonCompornentComponent } from './person-compornent/person-compornent.component';
import { ChildCompornentComponent } from './child-compornent/child-compornent.component';

import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    PersonCompornentComponent,
    ChildCompornentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
