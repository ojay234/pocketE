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
  data: referral[] = [];
  constructor(referralsService: ReferralService) {
    this.data = referralsService.getAll();
  }

  headings = headings;
}
