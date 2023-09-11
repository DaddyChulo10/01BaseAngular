import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>Contador: {{counter}} </p>
    <button class="btn btn-outline-success" (click)="increaseby(+1)">+1</button>
    <button class="mx-3 btn btn-outline-dark" (click)="reset()">Reset</button>
    <button class="btn btn-outline-danger" (click)="increaseby(-1)">-1</button>
    `,
    // styles: 
})

export class CounterComponent {
    public counter: number = 0


    increaseby(operacion: number): void {
        console.clear()
        console.log(operacion)
        console.log(this.counter)
        this.counter += operacion
        // this.counter += 1
    }

    reset(): void {
        this.counter = 0
    }

}