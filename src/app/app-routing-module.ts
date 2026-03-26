import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { Franchise } from './franchise/franchise';
import { CommingSoon } from './comming-soon/comming-soon';
const routes: Routes = [
  { path: '', component: CommingSoon },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'franchise', component: Franchise }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Scrolls to top for new pages
      anchorScrolling: 'enabled',           // Enables #id scrolling
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
