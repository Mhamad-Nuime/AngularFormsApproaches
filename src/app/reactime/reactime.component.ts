import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactime',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="reactive">
      <form [formGroup]='group'>
        <h2>Reactive Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="user-email"
            placeholder="Enter Your Email :"
            autocomplete="on"
            autocorrect
            [formControl]="emailControl"
          />
        </p>
        <p>
          <label for="password"></label
          ><input
            type="password"
            id="password"
            name="user-password"
            placeholder="Enter Your Password :"
            [formControl]="passwordControl"
          />
        </p>
        <button type="submit" (click)="onSubmit()">OK</button>
      </form>
    </div>
  `,
  styleUrl: './reactime.component.css',
})
export class ReactimeComponent {
  group= new FormGroup('');
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  onSubmit() : Boolean{
    console.log(`the Entered Email is : ${this.emailControl.value}
      and the password is : ${this.passwordControl.value}`);
    console.log(`.........................................`);
    console.log(`the Group Value is : ${this.group.controls}`)
      return false;
  }
}
