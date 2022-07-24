import { Component } from '@angular/core';
import { Ability } from '@casl/ability'
import { getAbility } from './CaslAbility';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fesdk-demo-angular';

  constructor(private ability: Ability) {
    getAbility().then((ability: any) => {
      // this.ability = ability;
      this.ability.update(ability)
    });
  }

}
