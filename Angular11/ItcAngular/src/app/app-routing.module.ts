import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomecomponentComponent },
      {
        path: 'order', component: OrdercomponentComponent,
        children: [
          { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
          { path: 'normalOrder', component: NormalOrderComponent },
          { path: 'premiumOrder', component: PremiumOrderComponent },
        ]
      },
      { path: 'customer', component: MyComponentComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'data', loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule) }
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
