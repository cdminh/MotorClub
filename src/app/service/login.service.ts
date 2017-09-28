import { Injectable }    from '@angular/core';  
import { Jsonp, URLSearchParams } from '@angular/http';  

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    constructor (private jsonp: Jsonp){}
    private getTokenUrl = "http://api.paddockmotorclub.ca/api/mobile/accounts/signin";

    getToken(){
        let params = new URLSearchParams();
        params.set("emailOrUsername", "minhcu");
        params.set("password", "Minhcu123!@#");        

        return this.jsonp.get(this.getTokenUrl, { search: params})
                        .map(response => <LoginToken>response.json())
    };

    getLoginTokenInstance(){
        return new LoginToken();
    }
}

export class LoginToken {    
    Token: string;
    Role: string;   
    Profile: Profile; 
    constructor(){
        this.Token = "",
        this.Role = "",
        this.Profile = new Profile()
    }
} 

export class Profile {    
    Id: string;
    FirstName: string;
    LastName: string;
    Username: string;
    Email: string;
    constructor(){
        this.Id = "";
        this.FirstName = "";
        this.LastName = "";
        this.Username = "";
        this.Email = "";
    }
}