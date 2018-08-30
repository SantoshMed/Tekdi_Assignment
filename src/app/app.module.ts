import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonComponent } from './person/person.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonComponent,
    PersonCardComponent,
    PersonComponent,
    HeaderComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
