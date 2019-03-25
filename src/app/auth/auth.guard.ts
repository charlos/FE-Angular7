import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

// http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial#app-module-ts

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private httpClient: HttpClient,
        private router: Router
        ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            const token = JSON.parse(localStorage.getItem('currentUser')).Token
            const headers = new HttpHeaders()
                .append('token', token)
            
            try {
                let data = await this.httpClient.get<any>(`api/auth/check-token`, { headers }).toPromise();
                console.log(data);
            } catch (error) {
                // remove user from local storage to log user out
                localStorage.removeItem('currentUser');
                
                // not logged in so redirect to login page with the return url
                this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });            
                return false;   
            }
            
            return true;
        }
        
        // not logged in so redirect to login page with the return url
        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}