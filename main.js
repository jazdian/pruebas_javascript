"use strict";
var LigaDeLaJusticia = /** @class */ (function () {
    function LigaDeLaJusticia(nombre, equipo, nombreReal) {
        this.nombre = "Sin Nobre";
        this.equipo = "";
        this.nombreReal = "";
        this.puedePelar = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return LigaDeLaJusticia;
}());
var Flash = new LigaDeLaJusticia("Flash", "Batman", "Willy West");
console.log(Flash);
