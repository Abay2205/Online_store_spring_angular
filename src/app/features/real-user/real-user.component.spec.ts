import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealUserComponent } from './real-user.component';

describe('RealUserComponent', () => {
  let component: RealUserComponent;
  let fixture: ComponentFixture<RealUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
