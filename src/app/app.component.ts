import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactimeComponent } from './reactime/reactime.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { SearchBox2Component } from './search-box2/search-box2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactimeComponent,TemplateDrivenComponent, SearchBoxComponent,SearchBox2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formApp';
}
