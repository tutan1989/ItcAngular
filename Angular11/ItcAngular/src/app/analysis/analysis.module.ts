import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';


@NgModule({
  declarations: [DataAnalysisComponent],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    ButtonModule,
    ChartModule
  ]
})
export class AnalysisModule { }
