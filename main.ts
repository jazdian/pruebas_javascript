
class LigaDeLaJusticia
{
    nombre:string = "Sin Nobre";
    equipo:string = "";
    nombreReal:string = "";

    puedePelar:boolean = false;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal:string )
    {

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;

    }

}

let Flash:LigaDeLaJusticia =  new LigaDeLaJusticia( "Flash", "Batman", "Willy West" );

console.log(Flash);
