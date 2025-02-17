import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from "./ui/menu/menu.component";
import { BannerComponent } from "./ui/banner/banner.component";
import { ProcessObjectLostComponent } from "./ui/process-object-lost/process-object-lost.component";
import { TestimonyComponent } from "./ui/testimony/testimony.component";
import { AnnoncesComponent } from "./ui/annonces/annonces.component";
import { PartnersComponent } from "./ui/partners/partners.component";
import { ContactsComponent } from "./ui/contacts/contacts.component";
import { FooterComponent } from "./ui/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
   
    MenuComponent,
    BannerComponent,
    ProcessObjectLostComponent,
    TestimonyComponent,
    AnnoncesComponent,
    PartnersComponent,
    ContactsComponent,
    FooterComponent,

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end-retrouvail-objet-angular';
}
