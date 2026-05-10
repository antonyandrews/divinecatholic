import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayersHomeComponent } from './prayers-home.component';

describe('PrayersHomeComponent', () => {
  let component: PrayersHomeComponent;
  let fixture: ComponentFixture<PrayersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayersHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrayersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
