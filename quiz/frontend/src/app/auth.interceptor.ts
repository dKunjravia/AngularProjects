import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class AuthInterceptop implements HttpInterceptor{
    
    intercept(req, next){

        var token = localStorage.getItem('token');

        var authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authReq);
    }

    constructor (){};
}