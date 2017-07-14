import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import {MdToolbarModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CabinetListComponent } from './cabinet-list/cabinet-list.component';
import { ChartParentComponent } from './chart-parent/chart-parent.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabinetListComponent,
    ChartParentComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    MdToolbarModule,
    MdCardModule,

    RouterModule.forRoot([
        {
            path: '',
            component: CabinetListComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
