import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial#app-module-ts

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }*/
        //return true;
        // not logged in so redirect to login page with the return url
        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}