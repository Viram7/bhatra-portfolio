import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEmpowerComponent } from './about-empower.component';

describe('AboutEmpowerComponent', () => {
  let component: AboutEmpowerComponent;
  let fixture: ComponentFixture<AboutEmpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEmpowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutEmpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
