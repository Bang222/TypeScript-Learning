export interface Pokemon{
    id:number,
    name:string,
    sprites: {
        front_default:string;
    }
}
export interface PokemonDetails extends Pokemon{
    abilities?:{
        ability:string;
        name:string;
    }[]
}
export interface Detail {
    id:number;
    isOpen:boolean;
}