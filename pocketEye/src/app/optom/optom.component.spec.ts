import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptomComponent } from './optom.component';

describe('OptomComponent', () => {
  let component: OptomComponent;
  let fixture: ComponentFixture<OptomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
