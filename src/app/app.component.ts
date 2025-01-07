import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { LocComponent } from "./loc/loc.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, LocComponent, FooterComponent, AboutComponent, PortfolioComponent, ContactComponent ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
