import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.componet.html'
})

export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}