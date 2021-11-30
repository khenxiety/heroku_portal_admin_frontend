import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSchoolyearComponent } from './manage-schoolyear.component';

describe('ManageSchoolyearComponent', () => {
  let component: ManageSchoolyearComponent;
  let fixture: ComponentFixture<ManageSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSchoolyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
