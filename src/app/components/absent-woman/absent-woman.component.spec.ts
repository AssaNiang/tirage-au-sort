import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentWomanComponent } from './absent-woman.component';

describe('AbsentWomanComponent', () => {
  let component: AbsentWomanComponent;
  let fixture: ComponentFixture<AbsentWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentWomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
