import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JosephSectionComponent } from './joseph-section.component';

describe('JosephSectionComponent', () => {
  let component: JosephSectionComponent;
  let fixture: ComponentFixture<JosephSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JosephSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JosephSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
