import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import PokemonColection from "./components/pokemonColection";
import {Detail, Pokemon} from "./Interface";

//F.C Functional Component
interface Pokemons {
    name: string,
    url: string;
}

const App: React.FC = () => {
    //<Type> them type no vao
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextUrl, setNextUrl] = useState<string>("");
    const [loading, setLoanding] = useState<boolean>(true);
    const [viewDetail, setDetail] = useState<Detail>({
        id: 0,
        isOpen: false,
    })
    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
            setNextUrl(res.data.next);
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const poke = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                );
                // chuyen tu object thanh array
                setPokemons((p) => [...p, poke.data]);
            });
        }
        getPokemon();
        setLoanding(false);
    }, [])
    const handleNextPage = async () => {
        setLoanding(true);
        let res = await axios.get(nextUrl);
        setNextUrl(res.data.next)
        res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            setPokemons((p) => [...p, poke.data]);
            setLoanding(false)
        })
    }
    return (
        <div className="App">
            <div className="container">
                <header className="pokemon-header">
                    Pokemon
                </header>
                <PokemonColection
                    pokemons={pokemons}
                    viewDetail={viewDetail}
                    setDetail={setDetail}
                />
                {!viewDetail.isOpen &&
                <button className=" btn btn-primary"
                        onClick={handleNextPage}
                >{loading ? "Loading..." : "Load more"}</button>
                }
            </div>
        </div>
    );
}

export default App;
