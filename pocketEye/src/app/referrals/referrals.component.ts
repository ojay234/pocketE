import { Component } from '@angular/core';
import { headings } from './referrals-table/tableHeadings';
import { referral } from '../models/referral';
import { ReferralService } from '../services/referral/referral.service';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css'],
})
export class ReferralsComponent {
  //initialize data with interface
  data: referral[] = [];
  headings = headings;
  constructor(referralsService: ReferralService) {
    //set data to referral service thats gets all the referral data
    this.data = referralsService.getAll();
  }
}
