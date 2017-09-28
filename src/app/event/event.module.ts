import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventlistComponent, EventdetailsComponent],
  exports: [EventlistComponent, EventdetailsComponent]
})
export class EventModule { }
