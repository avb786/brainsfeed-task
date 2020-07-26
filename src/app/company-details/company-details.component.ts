import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../company-data';
import * as L from 'leaflet';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import { AuthServiceService } from '../auth-service.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  public companyDetails: any;
  public displayModal = false;
  public showCompanyDetailsPopup = false;
  public latitude: any;
  public longitude: any;
  public companyDetailsPopUp: any;
  public displayCompanyDetails = false;
  mapOptions: MapOptions;
  public zoom  = 14;
  public searchText: any;


  public map: Map;
 
  constructor() { }

  ngOnInit(){
    this.companyDetails = COMPANY;
  }


  showCompanyDetails(companyDetails) {
    this.showCompanyDetailsPopup = true;
    this.companyDetailsPopUp = companyDetails;
    this.latitude = companyDetails.latitude;
    this.longitude = companyDetails.longitude;
    this.initializeMapOptions(companyDetails.latitude, companyDetails.longitude);
    this.displayModal = true;
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }
  
  private addSampleMarker() {
    const marker = new Marker([51.51, 0])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }

  private initializeMapOptions(latitude, longitude) {
    this.mapOptions = {
      center: latLng(latitude, longitude),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

}
