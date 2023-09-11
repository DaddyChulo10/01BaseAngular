import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman'
  public age: number = 45

  get capitalizadName(): string {
    return this.name.toUpperCase()
  }

  getHerouesDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Spider-man'
  }

  changeAge(): void {
    this.age = 16
  }

  resetForm(): any {
    this.name = 'ironman'
    this.age = 45
  }

}
