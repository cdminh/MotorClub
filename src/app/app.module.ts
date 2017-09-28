import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AlertModule } from 'ngx-bootstrap';
import { AnnouncementModule } from './announcement/announcement.module';
import { EventModule} from './event/event.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './service/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CoreModule,
    HomeModule,
    AnnouncementModule,
    EventModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
