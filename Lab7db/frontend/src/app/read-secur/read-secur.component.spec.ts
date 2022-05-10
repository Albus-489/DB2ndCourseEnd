import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSecurComponent } from './read-secur.component';

describe('ReadSecurComponent', () => {
  let component: ReadSecurComponent;
  let fixture: ComponentFixture<ReadSecurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSecurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSecurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
