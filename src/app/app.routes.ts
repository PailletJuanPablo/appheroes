import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent },
{path: 'about', component: AboutComponent },
{path: 'heroes', component: HeroesComponent },
{path: 'heroe/:id', component: HeroeComponent },
{path: 'buscar/:termino', component: BuscadorComponent },

{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

 // usar hashes
 // export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
 // no usar hashes (defecto)
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);