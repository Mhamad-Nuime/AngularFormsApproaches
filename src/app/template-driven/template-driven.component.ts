import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="reactive">
      <form #form='ngForm' (ngSubmit)="onSubmit(form)">
        <h2>Template Driven Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email :"
            [(ngModel)]='this.userInfo.email'
          />
        </p>
        <p>
          <label for="password"></label
          ><input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password :"
            [(ngModel)]='this.userInfo.password'
          />
        </p>
        <p>
        <button type="submit">Submit Your Data</button>
        </p>
      </form>
    </div>
  `,
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  userInfo = {
    email: '',
    password: ''
  }
  onSubmit( form : NgForm){
    console.warn(`this is the email address : ${this.userInfo.email} the password is : ${this.userInfo.password}`);
    console.log(`this is the email address : ${form.value.email} the password is : ${form.value.password}`);

    this.userInfo = {
      email: '',
      password: ''
    };
  }
}
