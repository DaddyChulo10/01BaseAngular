import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spíder-man', 'Ironman', 'Hulk', 'She Hulk', 'Thor'
  ]

  public deleteHero?: string

  removeLastHero(): any {
    this.deleteHero = this.heroNames.pop();

  }


}
