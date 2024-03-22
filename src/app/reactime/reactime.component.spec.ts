import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactimeComponent } from './reactime.component';

describe('ReactimeComponent', () => {
  let component: ReactimeComponent;
  let fixture: ComponentFixture<ReactimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
