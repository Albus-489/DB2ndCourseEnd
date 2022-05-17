import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvestComponent } from './create-invest.component';

describe('CreateInvestComponent', () => {
  let component: CreateInvestComponent;
  let fixture: ComponentFixture<CreateInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
