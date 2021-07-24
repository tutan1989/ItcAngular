import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { HighlightDirective } from './my-component/highlight.directive';
import { CustomerPipePipe } from './my-component/customer-pipe.pipe';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AnalysisModule } from './analysis/analysis.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
//import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HighlightDirective,
    CustomerPipePipe,
    HomecomponentComponent,
    OrdercomponentComponent,
    NormalOrderComponent,
    PremiumOrderComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    LoginComponent,
    DashboardComponent
    //,
    //DataAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AnalysisModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
