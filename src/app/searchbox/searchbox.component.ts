import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-box">
      <form (ngSubmit)="onSubmit(search)">
        <input type="search" id="search" name="q" size='50' placeholder="Search About Something 'from the class'" ngModel #search='ngModel'>
        <button type="submit" >
          <img src="assets/search_FILL0_wght400_GRAD0_opsz24.svg" alt="search icon">
        </button>
    </form>
    </div>
    <pre>{{this.query}}</pre>
  `,
  styleUrl: './searchbox.component.css'
})
export class SearchBoxComponent {
  query: string = '';
  onSubmit(ngModel : NgModel){
    this.query = ngModel.value;
    ngModel.reset('');
    console.log(`this the search query string ${ngModel}`);
  }
}
