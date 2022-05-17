import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecurComponent } from './create-secur.component';

describe('CreateSecurComponent', () => {
  let component: CreateSecurComponent;
  let fixture: ComponentFixture<CreateSecurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
