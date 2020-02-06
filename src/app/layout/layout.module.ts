import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../routes/app-routing.module';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ]
  
})
export class LayoutModule {}
