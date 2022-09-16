import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealUserComponent } from './update-real-user.component';

describe('UpdateRealUserComponent', () => {
  let component: UpdateRealUserComponent;
  let fixture: ComponentFixture<UpdateRealUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRealUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRealUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
