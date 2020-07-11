import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../company-data';
import * as L from 'leaflet';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';
import { AuthServiceService } from '../auth-service.service';
// const openGeocoder = require('node-open-geocoder');


@Component({  
  selector: 'app-compnay-list',
  templateUrl: './compnay-list.component.html',
  styleUrls: ['./compnay-list.component.scss']
})
export class CompnayListComponent implements OnInit {
  public companyDetails: any;
  public displayCompanyDetails = false;
  public companyDetailsPopUp: any;
  public showCompanyDetailsPopup = false;
  mapOptions: MapOptions;

  public map: Map;
  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
    this.companyDetails = COMPANY;
  }
  
  showCompanyDetails(companyDetails) {
    this.showCompanyDetailsPopup = true;
    this.companyDetailsPopUp = companyDetails;
    this.initializeMapOptions(companyDetails.latitude, companyDetails.longitude);
    this.displayCompanyDetails = true;
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
