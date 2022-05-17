import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecurComponent } from './show-secur.component';

describe('ShowSecurComponent', () => {
  let component: ShowSecurComponent;
  let fixture: ComponentFixture<ShowSecurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSecurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSecurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
