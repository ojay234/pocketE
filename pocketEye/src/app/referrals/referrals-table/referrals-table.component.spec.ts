import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsTableComponent } from './referrals-table.component';

describe('ReferralsTableComponent', () => {
  let component: ReferralsTableComponent;
  let fixture: ComponentFixture<ReferralsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
