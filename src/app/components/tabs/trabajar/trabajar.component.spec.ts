import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarComponent } from './trabajar.component';

describe('TrabajarComponent', () => {
  let component: TrabajarComponent;
  let fixture: ComponentFixture<TrabajarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajarComponent]
    });
    fixture = TestBed.createComponent(TrabajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
