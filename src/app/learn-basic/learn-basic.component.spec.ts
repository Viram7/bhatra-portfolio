import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnBasicComponent } from './learn-basic.component';

describe('LearnBasicComponent', () => {
  let component: LearnBasicComponent;
  let fixture: ComponentFixture<LearnBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
