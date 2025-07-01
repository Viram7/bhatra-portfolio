import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockTheComponent } from './unlock-the.component';

describe('UnlockTheComponent', () => {
  let component: UnlockTheComponent;
  let fixture: ComponentFixture<UnlockTheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockTheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnlockTheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
