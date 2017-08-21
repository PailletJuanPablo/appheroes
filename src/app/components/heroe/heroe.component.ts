import { HeroesService } from './../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
heroe: any = {};

  constructor( private actroute: ActivatedRoute,
  private heroesv: HeroesService ) {

    this.actroute.params.subscribe( params => {
      this.heroe = this.heroesv.getHeroe(params.id);
      console.log(this.heroe)

    });
  }

  ngOnInit() {
  }

}
