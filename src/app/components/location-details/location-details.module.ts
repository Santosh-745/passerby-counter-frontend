import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { LocationDetailsComponent } from './location-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';

import { LocationDetailsService } from './location-details.service';

@NgModule({
  declarations: [
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatTableModule,
    NgFor,
  ],
  exports: [
    LocationDetailsComponent
  ],
  providers: [
    LocationDetailsService
  ]
})
export class LocationDetailsModule { }
