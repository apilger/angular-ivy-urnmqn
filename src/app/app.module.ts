import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {Routes, RouterModule} from '@angular/router';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
const routes:Routes = [{path: 'first', component:FirstComponent}, 
{path: 'second', component:SecondComponent}, 
{path: '', component:FirstComponent}];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  exports:[RouterModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
