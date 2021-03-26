import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { RateFestivalComponent } from './rate-festival/rate-festival.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './user.service';
import {RatingService} from './rating.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FestivalsComponent,
    RateFestivalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    UserService,
    RatingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
