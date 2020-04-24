import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCnfComponent } from './reg-cnf.component';

describe('RegCnfComponent', () => {
  let component: RegCnfComponent;
  let fixture: ComponentFixture<RegCnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegCnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
