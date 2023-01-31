import React, {useEffect, useState} from 'react';
import "./pokemon.css"
import {Detail} from "../Interface";

interface Props {
    viewDetail: Detail;
    setDetail: React.Dispatch<React.SetStateAction<Detail>>;
    abilities: {
        name: string;
        ability: string;
    }[] | undefined
    name: string,
    id: number,
    image: string;
}

const PokemonList: React.FC<Props> = (props) => {
    const {name, id, image, abilities, viewDetail, setDetail} = props
    const [isSelected, setSelected] = useState(false)
    useEffect(() => {
        setSelected(id === viewDetail?.id);
    }, [viewDetail])
    const closeDetail = ()=> {
        setDetail({
            isOpen:false,
            id:0,
        });
    }
    return (
        <div className="">
            {isSelected ?
                (
                    <section className={"pokemon-list-detailed"}>
                        <div className="detail-container">
                            <p className="detail-close"
                            onClick={closeDetail}
                            >
                                    X
                            </p>
                            <div className={"detail-info"}>
                                <img src={image} alt={"pokemon"} className={"detail-img"}/>
                                <p className="detail-name"> {name}</p>
                            </div>

                                <div className={"detail-skill"}>
                                    <p className={"detail-ability"}> Abilities:</p>
                                    {abilities?.map((item:any)=>{
                                        return(
                                            <div className={""}>
                                                {item.ability.name}
                                            </div>

                                        )
                                    })}
                                </div>
                        </div>
                    </section>
                )
                :
                (
                    <section className="pokemon-list-container">
                        <p className="pokemon-name">
                            {name}
                        </p>
                        <img src={image} alt="bug"/>
                    </section>
                )
            }
        </div>
    )
}
export default PokemonList