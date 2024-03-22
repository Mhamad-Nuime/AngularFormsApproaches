import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [],
  template: `
    <div class="reactive">
      <form action="">
        <h2>Template Driven Login Form</h2>
        <p>
          <label for="email"></label
          ><input
            type="email"
            id="email"
            name="user-email"
            placeholder="Enter Your Email :"
          />
        </p>
        <p>
          <label for="password"></label
          ><input
            type="password"
            id="password"
            name="user-password"
            placeholder="Enter Your Password :"
          />
        </p>
        <button type="submit">OK</button>
      </form>
    </div>
  `,
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

}
