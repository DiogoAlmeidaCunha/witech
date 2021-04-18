import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorretomboComponent } from './torretombo.component';

describe('TorretomboComponent', () => {
  let component: TorretomboComponent;
  let fixture: ComponentFixture<TorretomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorretomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorretomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
