import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvaComponent} from './component'


export const ProvaRoutes: Routes = [
  {
    path: 'main',
    component: ProvaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ProvaRoutes)],
  exports: [RouterModule]
})
export class ProvaRoutingModule { }
