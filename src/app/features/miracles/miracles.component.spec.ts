import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiraclesComponent } from './miracles.component';

describe('MiraclesComponent', () => {
  let component: MiraclesComponent;
  let fixture: ComponentFixture<MiraclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiraclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiraclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
