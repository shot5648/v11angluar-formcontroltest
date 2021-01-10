import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonCompornentComponent } from './person-compornent/person-compornent.component';
import { ChildCompornentComponent } from './child-compornent/child-compornent.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCompornentComponent,
    ChildCompornentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
