import { Component } from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactime',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="reactive">
      <form [formGroup]='group' (ngSubmit)="onSubmit()">
        <h2>Reactive Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="user-email"
            placeholder="Enter Your Email :"
            autocomplete="on"
            formControlName="emailControl"
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
        <button type="submit">OK</button>
      </form>
    </div>
  `,
  styleUrl: './reactime.component.css',
})
export class ReactimeComponent {
  group= new FormGroup({
                        emailControl : new FormControl(''),
                        passwordControl : new FormControl('')});
  onSubmit() : Boolean{
    console.log(`.........................................`);
    console.log(`The User Email is : ${this.group.value.emailControl} and The User Password is : ${this.group.value.passwordControl}`)
      return false;
  }
}
