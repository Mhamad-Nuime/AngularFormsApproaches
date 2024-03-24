import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactime',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="reactive">
      <form [formGroup]='userInfo' (ngSubmit)="onSubmit()" >
        <h2>Reactive Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="user-email"
            placeholder="Enter Your Email :"
            autocomplete="on"
            formControlName="userEmail"
          />
        </p>
        <p>
          <label for="password"></label
          ><input
            type="password"
            id="password"
            name="user-password"
            placeholder="Enter Your Password :"
            formControlName="userPassword"
          />
        </p>
        <button type="submit">OK</button>
      </form>
    </div>
    <pre>{{this.userInfo.value | json }}</pre>
  `,
  styleUrl: './reactime.component.css',
})
export class ReactimeComponent {
  userInfo = new FormGroup({
                        userEmail : new FormControl(''),
                        userPassword : new FormControl('')});
  onSubmit() : Boolean{
    console.log(`.........................................`);
    console.log(`The User Email is : ${this.userInfo.value.userEmail} and The User Password is : ${this.userInfo.value.userPassword}`);
    this.userInfo.setValue({
      userEmail: '',
      userPassword: ''
    });
      return false;
  }
}
