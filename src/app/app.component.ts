import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: 'Tour of heroes';
  heroes: Hero[] = heroes; 
  selectedHero: Hero;

  $onInit(){
    this.heroes = heroes;
    console.log('on init executed');
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}

export class Hero {
  id: number;
  name: string;
}

const heroes: Array<Hero> = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]; 