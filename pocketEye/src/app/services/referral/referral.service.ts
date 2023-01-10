import { Injectable } from '@angular/core';
import referrals from '../../../assets/json/referrals.json';

@Injectable({
  providedIn: 'root',
})
export class ReferralService {
  constructor() {}
  getAll() {
    return referrals;
  }
}
