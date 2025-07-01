import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubleYourConComponent } from './duble-your-con.component';

describe('DubleYourConComponent', () => {
  let component: DubleYourConComponent;
  let fixture: ComponentFixture<DubleYourConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DubleYourConComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DubleYourConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
