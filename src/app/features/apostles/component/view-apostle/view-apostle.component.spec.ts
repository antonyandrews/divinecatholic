import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApostleComponent } from './view-apostle.component';

describe('ViewApostleComponent', () => {
  let component: ViewApostleComponent;
  let fixture: ComponentFixture<ViewApostleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewApostleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewApostleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
