import React, { useState } from "react";
import { leftArrow } from "../assets";
import { useDispatch } from "react-redux";
import { addToTeam, removeFromTeam } from "../../store/myTeamSlice";

const PokemonDetailModal = ({ infoPokemon, setOpenModal }) => {
  const dispatch = useDispatch();
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const maxSelection = 6; // Maximum number of Pokemon that can be selected

  const handleAddToFavorite = (poke) => {
    dispatch(addToTeam(poke));
  };

  const handleRemoveFromFavorite = (poke) => {
    dispatch(removeFromTeam(poke));
  };
  function capitalizeFirstLetter(string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }
  const toggleSelectedPokemon = (poke) => {
    if (selectedPokemon.find((p) => p.id === poke.id)) {
      // Remove the Pokémon from the selected list
      setSelectedPokemon(selectedPokemon.filter((p) => p.id !== poke.id));
    } else if (selectedPokemon.length < maxSelection) {
      // Add the Pokémon to the selected list if not exceeding the limit
      setSelectedPokemon([...selectedPokemon, poke]);
    }
  };
  return (
    <div
      className={`  -translate-x-[50%] -translate-y-[50%] rounded-2xl
    
    ${
      (infoPokemon?.speciesData?.color?.name === "green" && "bg-green-300") ||
      (infoPokemon?.speciesData?.color?.name === "blue" && "bg-blue-300") ||
      (infoPokemon?.speciesData?.color?.name === "red" && "bg-red-300") ||
      (infoPokemon?.speciesData?.color?.name === "white" && "bg-gray-300") ||
      (infoPokemon?.speciesData?.color?.name === "yellow" && "bg-yellow-300") ||
      (infoPokemon?.speciesData?.color?.name === "purple" && "bg-purple-300") ||
      (infoPokemon?.speciesData?.color?.name === "pink" && "bg-pink-300") ||
      (infoPokemon?.speciesData?.color?.name === "brown" && "bg-orange-900") ||
      (infoPokemon?.speciesData?.color?.name === "gray" && "bg-gray-300") ||
      (infoPokemon?.speciesData?.color?.name === "black" && "bg-slate-300")
    }
    
    
    `}
    >
      <div className="bg-transparent ">
        <div className=" px-2  flex justify-between">
          <img
            onClick={() => setOpenModal(false)}
            src={leftArrow}
            className="w-8 cursor-pointer"
          />
        </div>
        <h1 className="text-center text-xl pt-5 font-semibold">
          {" "}
          {capitalizeFirstLetter(infoPokemon?.name || "")}
        </h1>
        <div className="flex justify-center">
          {Object.values(infoPokemon?.types || []).map((item, index) => (
            <button
              key={index}
              className="text-sm cursor-text px-2 text-white bg-[#b3b1b1] bg-opacity-30 flex flex-col mb-2  rounded-3xl text-center"
            >
              {item?.type?.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center ">
          <img
            src={infoPokemon?.sprites?.front_default}
            className="  object-fill  w-64 "
          />
        </div>
      </div>
      <div className="bg-slate-700  rounded-2xl ">
        <div className="flex px-12 gap-5 border-b border-slate-500  lg:pr-36">
          <button>About</button>
          <button>Base Stats</button>
          <button>Evolution</button>
        </div>
        <div className="py-5">
          <div className="flex px-5">
            <div className="w-20">Species</div>
            <div>
              {" "}
              {Object.values(infoPokemon?.types || []).map((item, index) => (
                <button key={index}>
                  {item?.type?.name}
                  {index !== Object.values(infoPokemon?.types)?.length - 1 && (
                    <span>,</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex px-5">
            <div className="w-20">Height</div>
            <div>{infoPokemon?.height}</div>
          </div>
          <div className="flex px-5">
            <div className="w-20">Weight</div>
            <div>{infoPokemon?.weight}</div>
          </div>
          <div className="flex px-5">
            <div className="w-20">Weight</div>
            <div>
              {infoPokemon?.abilities?.map((item, index) => (
                <span>
                  {item?.ability?.name}
                  {index !== infoPokemon?.abilities?.length - 1 && (
                    <span>,</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;
