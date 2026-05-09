import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostleListComponent } from './apostle-list.component';

describe('ApostleListComponent', () => {
  let component: ApostleListComponent;
  let fixture: ComponentFixture<ApostleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApostleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApostleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
