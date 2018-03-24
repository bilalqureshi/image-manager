import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImagePostingsComponent} from "./image-postings/image-postings.component";

const routes: Routes = [
  {
    path: '',
    component: ImagePostingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageViewerRoutingModule { }
