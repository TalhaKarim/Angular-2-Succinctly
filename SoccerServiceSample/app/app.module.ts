import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { AppStandings }  from './app.standings';
import { AppScoring }    from './app.scoring';
import { AppAdmin }    from './app.admin';



@NgModule({
  imports:      [ BrowserModule,routing ],
  declarations: [ AppComponent,AppStandings,AppScoring,AppAdmin ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }