import React from 'react';
import {Detail, Pokemon, PokemonDetails} from "../Interface";
import PokemonList from "./PokemonList";

interface Props {
    pokemons: PokemonDetails[];
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonColection: React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setDetail} = props
    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpen) {
            setDetail({
                id: id,
                isOpen: true,
            })
        }
    }
    return (
        <section className={viewDetail.isOpen ? 'collection-container-active' : "collection-container"}>
            {viewDetail.isOpen ? (
                    <div className={"overlay"}>
                    </div>
                ) :
                <></>

            }
            {pokemons.map((pokemon, index) => {
                return (
                    <div className=""
                         onClick={() => selectPokemon(pokemon.id)}
                    >
                        <PokemonList
                            key={pokemon.id}
                            viewDetail={viewDetail}
                            setDetail={setDetail}
                            id={pokemon.id}
                            name={pokemon.name}
                            abilities={pokemon.abilities}
                            image={pokemon.sprites.front_default}
                        />
                    </div>
                )
            })

            }
        </section>
    )
}
export default PokemonColection;