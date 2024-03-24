import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfo } from '../../interfaces/userInfo.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="reactive">
      <form (ngSubmit)="onSubmit()" >
        <h2>Template Driven Login Form</h2>
        <p>
          <label for="email"></label>
          <input
            type="email"
            id="Temail"
            name="userEmail"
            value=""
            placeholder="Enter Your Email :"
            [(ngModel)]="this.userInfo.userEmail"
          />
        </p>
        <p>
          <label for="password"></label>
          <input
            type="password"
            id="Tpassword"
            name="userPassword"
            placeholder="Enter Your Password :"
            [(ngModel)]="this.userInfo.userPassword"
          />
        </p>
        <button type="submit" >OK</button>
      </form>
    </div>
    <br><br>
      <pre>{{userInfo | json}}</pre>
  `,
  styleUrl: './template-driven.component.css',
})
export class TemplateDrivenComponent {
  userInfo : UserInfo = {
    userEmail: '',
    userPassword: ''
  }
  onSubmit() {
    console.log(`this is the user email : ${this.userInfo.userEmail}, and the password is : ${this.userInfo.userPassword}`);
    this.userInfo = {
      userEmail: '',
      userPassword: ''
    }
  }
}
