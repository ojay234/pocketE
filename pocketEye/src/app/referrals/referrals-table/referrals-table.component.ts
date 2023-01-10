import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-referrals-table',
  templateUrl: './referrals-table.component.html',
  styleUrls: ['./referrals-table.component.css'],
})
export class ReferralsTableComponent implements OnInit {
  //initialize inputs and variables
  @Input() headings: any[] = [];
  @Input() data: any[] = [];
  @Input() pageSize: number = 10;
  page: number = 0;
  items: any[] = [];
  pageData = {} as {
    start: number;
    end: number;
  };

  constructor() {}

  ngOnInit(): void {
    this.initPagination();
  }

  private initPagination(): void {
    this.paginate(this.page, this.pageSize);
  }

  public get size(): number {
    return this.data.length;
  }

  public get totalPages(): number {
    return Math.ceil(this.size / this.pageSize);
  }

  private paginate(page: number, pageSize: number): void {
    const startPortion = page * pageSize;
    let endPortion = startPortion + pageSize;

    if (endPortion > this.size) {
      endPortion -= endPortion - this.size;
    }
    this.saveCalculatedPortion(startPortion, endPortion);
    this.items = [...this.data.slice(startPortion, endPortion)];
  }

  private saveCalculatedPortion(start: number, end: number): void {
    this.pageData = {
      ...this.pageData,
      start,
      end,
    };
  }

  public prev(): void {
    if (this.page > 0) {
      this.page -= 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  public firstPage(): void {
    if (this.page > 0) {
      this.page = 0;
      this.paginate(this.page, this.pageSize);
    }
  }

  public next(): void {
    if (this.page < this.totalPages && this.pageData.end < this.size) {
      this.page += 1;
      this.paginate(this.page, this.pageSize);
    }
  }

  public lastPage(): void {
    if (this.page < this.totalPages && this.pageData.end < this.size) {
      this.page = this.totalPages - 1;
      this.paginate(this.page, this.pageSize);
    }
  }
}
