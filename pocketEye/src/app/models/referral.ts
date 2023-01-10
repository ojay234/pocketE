export interface referral {
  date: string;
  nhs_number: string;
  first_name: string;
  last_name: string;
  dob: string;
  suspected_diagnosis: string;
  referred_by: object;
  status: object;
  actions: string;
}
