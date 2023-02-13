import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentManComponent } from './absent-man.component';

describe('AbsentManComponent', () => {
  let component: AbsentManComponent;
  let fixture: ComponentFixture<AbsentManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
