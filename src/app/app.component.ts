import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  hero: Hero  = {
    id: 1,
    name: 'Windstorm'
  };
}

export class Hero {
  id: number;
  name: string;
}