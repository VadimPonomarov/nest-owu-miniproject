import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ServiceComponent} from './modules/service/service/service.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: WelcomeComponent,
    loadChildren: () => import('./modules/auth/auth.module')
      .then(v => v.AuthModule)
  },
  {
    path: 'services', canActivate: [AuthGuard],
    loadChildren: () => import('./modules/service/service.module')
      .then(v => v.ServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
