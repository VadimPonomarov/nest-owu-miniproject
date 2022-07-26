import {NgModule} from '@angular/core';

import {ServiceRoutingModule} from './service-routing.module';
import {ServiceComponent} from './service/service.component';
import {ApiServicesService} from '../../services/api-services.service';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {AuthGuard} from '../../guards/auth.guard';


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [
    ApiServicesService,
    AuthGuard
  ]
})
export class ServiceModule {
}
