import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserdetailComponent } from './getuserdetail.component';

describe('GetuserdetailComponent', () => {
  let component: GetuserdetailComponent;
  let fixture: ComponentFixture<GetuserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetuserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetuserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
