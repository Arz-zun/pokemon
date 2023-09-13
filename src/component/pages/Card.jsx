import React, { useEffect, useState } from "react";
import PokemonDetailModal from "./PokemonDetailModal";
import { useDispatch } from "react-redux";
import { addToTeam, removeFromTeam } from "../../store/myTeamSlice";

const Card = ({ pokemon, loading }) => {
  const [infoPokemon, setInfoPokemon] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const maxSelection = 6; // Maximum number of Pokemon that can be selected

  function capitalizeFirstLetter(string) {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
  }

  const dispatch = useDispatch();

  const handleAddToTeam = () => {
    dispatch(addToTeam(selectedPokemon));
    setSelectedPokemon([]);
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
  console.log("selectedPokemon", selectedPokemon);
  return (
    <>
      {/* Modal for pokemon details */}
      {openModal && (
        <>
          <div
            onClick={() => setOpenModal(false)}
            className="fixed h-full w-full left-0 top-0 opacity-50 bg-black z-40 "
          />

          <div
            // style={{ transform: "translate(-50%, -50%)" }}
            className="text-white fixed     left-[50%]   top-[50%]  bg-transparent z-50 "
          >
            <PokemonDetailModal
              setOpenModal={setOpenModal}
              infoPokemon={infoPokemon}
            />
          </div>
        </>
      )}

      {selectedPokemon.length > 0 && (
        <div className="flex justify-center gap-5 my-10">
          Click Add button to add {selectedPokemon.length} to my team
          <button
            onClick={handleAddToTeam}
            className="bg-yellow-400 text-white px-2 py-1 rounded-md"
          >
            Add
          </button>
        </div>
      )}
      <div className=" grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-5">
        {pokemon?.map((item, index) => {
          return (
            <div
              className={`grid inset-0  backdrop-blur-md place-content-center rounded-3xl ${
                (item?.speciesData?.color?.name === "green" &&
                  "bg-green-300") ||
                (item?.speciesData?.color?.name === "blue" && "bg-blue-300") ||
                (item?.speciesData?.color?.name === "red" && "bg-red-300") ||
                (item?.speciesData?.color?.name === "white" && "bg-gray-300") ||
                (item?.speciesData?.color?.name === "yellow" &&
                  "bg-yellow-300") ||
                (item?.speciesData?.color?.name === "purple" &&
                  "bg-purple-300") ||
                (item?.speciesData?.color?.name === "pink" && "bg-pink-300") ||
                (item?.speciesData?.color?.name === "brown" &&
                  "bg-orange-900") ||
                (item?.speciesData?.color?.name === "gray" && "bg-gray-300") ||
                (item?.speciesData?.color?.name === "black" && "bg-slate-300")
              }  `}
              key={index}
              onClick={() => setInfoPokemon(item)}
            >
              <button
                onClick={() => toggleSelectedPokemon(item)}
                className="bg-red-500 z-40"
              >
                {selectedPokemon.find((p) => p.id === item.id)
                  ? "Remove from Selection"
                  : "Add to Selection"}
              </button>
              <div
                onClick={() => setOpenModal(true)}
                className="flex  items-center px-2 gap-2"
              >
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
          );
        })}
      </div>
      {pokemon?.length === 0 && (
        <p className="w-full text-center">No data found</p>
      )}
    </>
  );
};

export default Card;
