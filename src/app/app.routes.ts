import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './ui/inscription/inscription.component';
import { AnnoncesComponent } from './ui/annonces/annonces.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:"/", component:AppComponent,
    },
    {
        path:"/annonces", component:AnnoncesComponent,
    },
    {
        path:"/signup", component:InscriptionComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    })
    export class AppRoutingModule{}

