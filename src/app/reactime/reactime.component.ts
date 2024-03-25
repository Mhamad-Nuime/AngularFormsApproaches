import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactime',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="reactive">
      <form [formGroup]='userInfo' (ngSubmit)="onSubmit()">
        <h2>Reactive Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="user-email"
            placeholder="Enter Your Email :"
            autocomplete="on"
            formControlName="email"
          />
        </p>
        <p>
          <label for="password"></label
          ><input
            type="password"
            id="password"
            name="user-password"
            placeholder="Enter Your Password :"
            formControlName="password"
          />
        </p>
        <p>
          <button type="submit">Submit Your Data</button>
        </p>
      </form>
    </div>
  `,
  styleUrl: './reactime.component.css',
})
export class ReactimeComponent {
  userInfo = new FormGroup({
                        email : new FormControl(''),
                        password: new FormControl('')});
  onSubmit() : void {
    console.log(`The User Email is : ${this.userInfo.value.email} and The User Password is : ${this.userInfo.value.password}`);

    this.userInfo.setValue({
      email: '',
      password: ''
    });
  }
}
