import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompnayListComponent } from './compnay-list/compnay-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { MapComponent } from './map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AgmCoreModule } from '@agm/core';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CompnayListComponent,
    MapComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DialogModule,
    ButtonModule,
    LeafletModule,
    ProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8b9DMEmKS893TSU2zE5R5afNkkny5Ewk'
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
