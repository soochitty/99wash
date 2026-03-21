import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
