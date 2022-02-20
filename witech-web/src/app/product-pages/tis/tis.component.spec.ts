import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TisComponent } from './tis.component';

describe('TisComponent', () => {
  let component: TisComponent;
  let fixture: ComponentFixture<TisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
