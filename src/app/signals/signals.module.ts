import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';

@NgModule({
  imports: [CommonModule, SignalsRoutingModule, SharedModule, RouterModule],
  declarations: [SignalsLayoutComponent, SideMenuComponent],
})
export class SignalsModule {}
