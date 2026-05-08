import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusSectionComponent } from './jesus-section.component';

describe('JesusSectionComponent', () => {
  let component: JesusSectionComponent;
  let fixture: ComponentFixture<JesusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JesusSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JesusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
