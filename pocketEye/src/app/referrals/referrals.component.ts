import { Component } from '@angular/core';
import { data, headings } from '../data';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css'],
})
export class ReferralsComponent {
  data = data;
  headings = headings;
}
