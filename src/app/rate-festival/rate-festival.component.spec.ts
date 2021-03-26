import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateFestivalComponent } from './rate-festival.component';

describe('RateFestivalComponent', () => {
  let component: RateFestivalComponent;
  let fixture: ComponentFixture<RateFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateFestivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
