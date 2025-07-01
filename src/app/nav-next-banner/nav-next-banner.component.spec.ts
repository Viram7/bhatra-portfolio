import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNextBannerComponent } from './nav-next-banner.component';

describe('NavNextBannerComponent', () => {
  let component: NavNextBannerComponent;
  let fixture: ComponentFixture<NavNextBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavNextBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavNextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
