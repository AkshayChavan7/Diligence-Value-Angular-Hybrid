import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  dob: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const form: HTMLFormElement = document.querySelector('#loginForm');
    form.onsubmit = () => this.login();
  }

  login(): void {
    // alert(this.username +' '+this.password);
    if (this.username == 'admin' && this.password == 'admin') {
      alert('Login successful!');
    }
    else {
      alert('Invalid username/password!');
    }
    // this.router.navigate(['/register']);
  }

}
