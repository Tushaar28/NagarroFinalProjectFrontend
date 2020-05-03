import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagebodyComponent } from './homepagebody.component';

describe('HomepagebodyComponent', () => {
  let component: HomepagebodyComponent;
  let fixture: ComponentFixture<HomepagebodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagebodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
