import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  phoneno: number;
  dob: string;
  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

    const form: HTMLFormElement = document.querySelector('#myform');
    form.onsubmit = () => this.register();
  }

  register(): boolean {
    alert('User registered successfully!')
    this.router.navigate(['/login']);
    return false;
  }
}
