import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.componet.html'
})

export class HeroeComponent{


nombre  : string = 'Ironman';
edad    : number = 45;

get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
}

obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
}

camabiarNombre():void {
    this.nombre = 'SpiderMan';
}

cambiarEdad():void {
    this.edad = 60;
}


}