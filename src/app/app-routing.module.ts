import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'viewImage',
    loadChildren: 'app/image-viewer/image-viewer.module#ImageViewerModule'
  },
  { path: '', redirectTo: 'viewImage', pathMatch: 'full' },
  { path: '**', redirectTo: 'viewImage' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
