import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadInvestComponent } from './read-invest.component';

describe('ReadInvestComponent', () => {
  let component: ReadInvestComponent;
  let fixture: ComponentFixture<ReadInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
