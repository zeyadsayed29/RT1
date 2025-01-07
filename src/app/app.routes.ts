import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotingComponent } from './noting/noting.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'home', pathMatch :'full'},
    {path : 'home' , component : HomeComponent , title : 'home'},
    {path : 'about' , component : AboutComponent , title : 'about page'},
    {path : 'portfolio' , component : PortfolioComponent , title : 'portfolio'},
    {path : 'contact' , component :ContactComponent , title : 'contact'},
    {path : '**' , component : NotingComponent, title : 'not found page'}
];
