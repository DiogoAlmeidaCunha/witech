import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeccerComponent } from './deccer.component';

describe('DeccerComponent', () => {
  let component: DeccerComponent;
  let fixture: ComponentFixture<DeccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
