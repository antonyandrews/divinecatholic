import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucificationComponent } from './crucification.component';

describe('CrucificationComponent', () => {
  let component: CrucificationComponent;
  let fixture: ComponentFixture<CrucificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrucificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrucificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
