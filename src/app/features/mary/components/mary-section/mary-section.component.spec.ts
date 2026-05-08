import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarySectionComponent } from './mary-section.component';

describe('MarySectionComponent', () => {
  let component: MarySectionComponent;
  let fixture: ComponentFixture<MarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
