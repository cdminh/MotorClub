import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementlistComponent } from './announcementlist/announcementlist.component';
import { AnnouncementdetailsComponent } from './announcementdetails/announcementdetails.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnnouncementlistComponent, AnnouncementdetailsComponent],
  exports: [AnnouncementlistComponent, AnnouncementdetailsComponent]
})
export class AnnouncementModule { }
