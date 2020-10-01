import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Router } from '@angular/router';
import { async } from 'q';
import { json } from 'graphlib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  async onLogin(loginForm: NgForm) {
    console.log(loginForm.value, 'loginForm.value-22', loginForm.controls.userName.value);
    const pwd = loginForm.controls.password.value;
    console.log(pwd,"pwd-26")
    const accessToken =
      'ObxEhz4GhnqBwWORvS0AEkgLfWZvlnAfLBKjesfHFwSuckctOavRnpACDONBFhSX';
    const token = await this.authService.getUser(loginForm.value, accessToken);
    console.log(token, 'token-24', token[0].username, token[0].password);
    // if (token[0].username != '' && token[0].password === pwd) {
      if (token[0].username != '') {
      console.log('Login');
      //localStorage.setItem('token', token.userName);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('username',  token[0].username);
        // window.localStorage.setItem('role', data.result.role);
      // this.alertify.success('Login Successful');
      //alert('Login Successful');
      // this.router.navigate(['/']);
      // this.router.navigate(['navbar']);
      this.router.navigate(['home-new']);
    } else {
      //this.alertify.error('User Id or Password is wrong');
      alert('User Id or Password is wrong');
    }
  }
}
