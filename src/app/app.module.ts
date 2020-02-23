import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared-components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import {SharedModule} from './core/shared.module';
import {MaterialModule} from './core/material.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesComponent } from './components/devices/devices.component';
import { ListDevicesComponent } from './components/devices/tabs/list-devices/list-devices.component';
import { AllocatedDevicesComponent } from './components/devices/tabs/allocated-devices/allocated-devices.component';
import { AvailableDevicesComponent } from './components/devices/tabs/available-devices/available-devices.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    DevicesComponent,
    ListDevicesComponent,
    AllocatedDevicesComponent,
    AvailableDevicesComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
