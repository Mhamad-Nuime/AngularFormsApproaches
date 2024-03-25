import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBox2Component } from './search-box2.component';

describe('SearchBox2Component', () => {
  let component: SearchBox2Component;
  let fixture: ComponentFixture<SearchBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBox2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
