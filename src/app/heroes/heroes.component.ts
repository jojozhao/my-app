import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	/*Test change to github
	hero: Hero = {
	    id: 1,
	    name: 'Windstorm'
	};

	*/
	heroes = HEROES;  

	selectedHero: Hero;  /* :  just like  = new*/

  	constructor() { }

  	ngOnInit() {}

  	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
