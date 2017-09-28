import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {LoginToken} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginToken: LoginToken) { }
  
  ngOnInit() { 
    let loginToken: LoginToken = new this.loginToken();
  }

}