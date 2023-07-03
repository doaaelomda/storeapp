import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducatdetailsComponent } from './producatdetails.component';

describe('ProducatdetailsComponent', () => {
  let component: ProducatdetailsComponent;
  let fixture: ComponentFixture<ProducatdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducatdetailsComponent]
    });
    fixture = TestBed.createComponent(ProducatdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
