import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantJesusComponent } from './infant-jesus.component';

describe('InfantJesusComponent', () => {
  let component: InfantJesusComponent;
  let fixture: ComponentFixture<InfantJesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfantJesusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfantJesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
