import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box2',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-box">
      <form (ngSubmit)="onSubmit(inputElemet)">
        <input type="search" id="search" name="q" size='50'
          placeholder="Search  About Something 'from the template'"
          #inputElemet
          ngModel  (ngModelChange)='this.onChange($event)' [ngModelOptions]="{updateOn: 'submit'}">
        <button type="submit" >
          <img src="assets/search_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
        </button>
    </form>
    </div>
    <pre>{{this.query}}</pre>
  `,
  styleUrl: './search-box2.component.css'
})
export class SearchBox2Component {
  query: string = '';
  onChange(e : string){
    this.query = e;
  }
  onSubmit(element: HTMLInputElement){
    element.value = '';
  }
}
