import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoapiComponent } from './demoapi.component';

describe('DemoapiComponent', () => {
  let component: DemoapiComponent;
  let fixture: ComponentFixture<DemoapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
