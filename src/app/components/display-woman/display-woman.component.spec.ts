import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWomanComponent } from './display-woman.component';

describe('DisplayWomanComponent', () => {
  let component: DisplayWomanComponent;
  let fixture: ComponentFixture<DisplayWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
