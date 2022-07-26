import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ServiceComponent} from './service/service.component';
import {ApiServicesService} from '../../services';

const routes: Routes = [
  {
    path: '', component: ServiceComponent,
    children: [
      {path: ':id', component: ServiceComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ApiServicesService
  ]
})
export class ServiceRoutingModule {
}
