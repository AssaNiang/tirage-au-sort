import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayManComponent } from './display-man.component';

describe('DisplayManComponent', () => {
  let component: DisplayManComponent;
  let fixture: ComponentFixture<DisplayManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
