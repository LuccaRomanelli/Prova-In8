import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvaComponent } from './component';
import { ProvaRoutingModule } from './prova-routing.module'
import { AngularMaterialModule } from '../angular-material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [ProvaComponent],
  imports: [
    CommonModule,
    ProvaRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ProvaModule { }
