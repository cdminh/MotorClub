import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from '../../app/core/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, NotfoundComponent, HeaderComponent],
  exports: [LoginComponent, NotfoundComponent, HeaderComponent]
})
export class CoreModule { }
