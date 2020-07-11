import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../company-data';

@Component({
  selector: 'app-compnay-list',
  templateUrl: './compnay-list.component.html',
  styleUrls: ['./compnay-list.component.scss']
})
export class CompnayListComponent implements OnInit {
  public companyDetails: any;
  public displayCompanyDetails = false;
  constructor() { }

  ngOnInit() {
    this.companyDetails = COMPANY;
    
  }
  showCompanyDetails() {
    this.displayCompanyDetails = true;
  }

}
