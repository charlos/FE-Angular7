import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    //Validators.email,
  ]);

  passFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async onSubmit() {
    const user:User = {
      username: String(this.emailFormControl.value),
      pass: String(this.passFormControl.value),
    };

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
    const body = new HttpParams()
      .set('username', user.username)
      .set('pass', user.pass)

    let data = await this.httpClient.post<any>(`api/auth/login`, body.toString(), { headers }).toPromise();
    console.log(data);

    // login successful if there's a jwt token in the response
    if (data && data.Token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.router.navigate([this.returnUrl]);
      //this.currentUserSubject.next(user);
    }
  }
}
