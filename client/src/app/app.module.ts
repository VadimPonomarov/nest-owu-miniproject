import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutMainComponent} from './layouts/layout-main/layout-main.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {DrawerComponent} from './components/drawer/drawer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {AuthModule} from './modules/auth/auth.module';
import {ApiAuthService, ApiServicesService} from './services';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ApiInterceptor} from './interseptors';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutMainComponent,
    ToolbarComponent,
    MenuComponent,
    DrawerComponent,
    SideMenuComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    AuthModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [HttpClient,
    ApiAuthService,
    ApiServicesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
