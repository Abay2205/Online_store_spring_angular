import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRealUserComponent } from './create-real-user.component';

describe('CreateRealUserComponent', () => {
  let component: CreateRealUserComponent;
  let fixture: ComponentFixture<CreateRealUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRealUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRealUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
