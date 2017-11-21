import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeSlideComponent } from './home-slide/home-slide.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BTSOverviewComponent } from './about-us/btsoverview/btsoverview.component';
import { WhoWeServeComponent } from './about-us/who-we-serve/who-we-serve.component';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './about-us/transactions/transactions.component';
import { routerTransition } from 'router.animations';
import { WhyHireUsComponent } from './about-us/why-hire-us/why-hire-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InTheNewsComponent } from './in-the-news/in-the-news.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProcessComponent } from './process/process.component';
import { Phase1Component } from './process/phase1/phase1.component';
import { Phase2Component } from './process/phase2/phase2.component';
import { Phase3Component } from './process/phase3/phase3.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { ContactusComponent } from './contactus/contactus.component';

import { AgmCoreModule } from '@agm/core';

const appRoutes : Routes = [
  {path : '', component: HomeSlideComponent},
  {path : 'about-us', component: AboutUsComponent},
  {path : 'btsoverview', component: BTSOverviewComponent},
  {path : 'who-we-serve', component: WhoWeServeComponent},
  {path : 'transactions', component: TransactionsComponent},
  {path : 'why-hire-us', component: WhyHireUsComponent},
  {path : 'testimonials', component: TestimonialsComponent},
  {path : 'news', component: InTheNewsComponent},
  {path : 'resources', component: ResourcesComponent},
  {path : 'process', component: ProcessComponent},
  {path : 'phase1', component: Phase1Component},
  {path : 'phase2', component: Phase2Component},
  {path : 'phase3', component: Phase3Component},
  {path : 'advisors', component: AdvisorsComponent},
  {path : 'contactus', component: ContactusComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeSlideComponent,
    AboutUsComponent,
    BTSOverviewComponent,
    WhoWeServeComponent,
    TransactionsComponent,
    WhyHireUsComponent,
    TestimonialsComponent,
    InTheNewsComponent,
    ResourcesComponent,
    ProcessComponent,
    Phase1Component,
    Phase2Component,
    Phase3Component,
    AdvisorsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJOIQrU2RAYQ0oOcT5HKUQ5C4KOfPwUn0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
