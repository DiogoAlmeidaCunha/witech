import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitarqComponent } from './digitarq.component';

describe('DigitarqComponent', () => {
  let component: DigitarqComponent;
  let fixture: ComponentFixture<DigitarqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitarqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitarqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
