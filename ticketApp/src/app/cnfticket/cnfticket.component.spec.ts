import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnfticketComponent } from './cnfticket.component';

describe('CnfticketComponent', () => {
  let component: CnfticketComponent;
  let fixture: ComponentFixture<CnfticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnfticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnfticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
