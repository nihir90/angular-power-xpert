import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
 // { path: 'dashboard', component: DashboardComponent },
  { path: 'devices', component: DevicesComponent },
 // { path: 'settings', component: SettingsComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
