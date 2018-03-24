import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageViewerRoutingModule } from './image-viewer-routing.module';
import { ImagePostingsComponent } from './image-postings/image-postings.component';

@NgModule({
  imports: [
    CommonModule,
    ImageViewerRoutingModule
  ],
  declarations: [ImagePostingsComponent]
})
export class ImageViewerModule { }
