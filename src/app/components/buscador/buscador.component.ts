import { HeroesService } from './../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'})
export class BuscadorComponent implements OnInit {

  heroes: any[]= [];
termino: string;

  constructor(private actrout: ActivatedRoute,
  private heroessv: HeroesService,   private router: Router) { }

  ngOnInit() {
    this.actrout.params.subscribe(params => {
this.termino = params.termino;
this.heroes = this.heroessv.buscarHeroes(params['termino']);
console.log(this.heroes);

    });
  }

  verHeroe( idx: number) {
    this.router.navigate( ['/heroe', idx ] );
      }

}
