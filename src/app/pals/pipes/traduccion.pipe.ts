import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'traducir'
})

export class TraducirPipe implements PipeTransform {
    transform(tipoEnIngles: string): string {
        const asociacion: { [key: string]: string } = {
            "Electric": "Eléctrico",
            "Flying": "Volador",
            "Grass": "Planta",
            "Fire": "Fuego",
            "Water": "Agua",
            "Ice": "Hielo",
            "Dragon": "Dragón",
            "Ground": "Tierra",
            "Normal": "Normal"
        };
        return asociacion[tipoEnIngles] || tipoEnIngles;
    }
    
}