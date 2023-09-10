import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fecthPokemon, fecthPokemonList } from "../../store/pokemonSlice";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log("infoPokemon", infoPokemon);
  console.log("pokemon", pokemon);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-5">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon?.map((item) => {
          return (
            <>
              <div
                className="grid place-content-center rounded-3xl bg-sky-300 "
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <div className="flex  items-center px-2 gap-2">
                  <div>
                    <h1 className="text-white text-xl mb-3">
                      {capitalizeFirstLetter(item.name)}
                    </h1>
                    {Object.values(item?.types).map((item, index) => (
                      <button
                        key={index}
                        className="text-sm cursor-text px-2 text-white bg-[#b3b1b1] bg-opacity-30 flex flex-col mb-2  rounded-3xl text-center"
                      >
                        {item?.type?.name}
                      </button>
                    ))}
                  </div>
                  <img
                    src={item.sprites.front_default}
                    alt={item.name}
                    className="h-32 w-32 object-fill"
                  />
                </div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default Card;
