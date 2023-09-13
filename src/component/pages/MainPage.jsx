import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { pokeapi } from "../assets";
const buttonName = [
  {
    name: "I",
    value: "generation-i",
  },
  {
    name: "II",
    value: "generation-ii",
  },
  {
    name: "III",
    value: "generation-iii",
  },
  {
    name: "IV",
    value: "generation-iv",
  },
  {
    name: "V",
    value: "generation-v",
  },
  {
    name: "VI",
    value: "generation-vi",
  },
  {
    name: "VII",
    value: "generation-vii",
  },
  {
    name: "VIII",
    value: "generation-viii",
  },
];
const MainPage = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1000"
  );
  const [nextUrl, setNextUrl] = useState();
  const [generation, setGeneration] = useState("generation-i");
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);

      const pokemonData = response.data;
      const speciesData = await axios.get(pokemonData.species.url);

      const combinedData = {
        ...pokemonData,
        speciesData: speciesData.data,
      };

      setPokeData((prevState) => [...prevState, combinedData]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };
  const pokeFun = async () => {
    try {
      const res = await axios.get(url);
      setNextUrl(res?.data?.next);
      const pokemonList = res.data.results;

      // Fetch data for each Pokemon
      for (const pokemon of pokemonList) {
        await fetchData(pokemon.url);
      }
    } catch (error) {
      console.error("Error fetching Pokémon list:", error);
    }
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  const filterData = pokeData.filter(
    (item) => item?.speciesData?.generation?.name === generation
  );

  console.log("filter", filterData);

  return (
    <div className="mx-auto max-w-5xl px-5">
      <div className="flex items-center flex-col mt-5">
        <img src={pokeapi} />
        <h1>Select Geeration:</h1>
        <div className="flex">
          <div
            className={`flex  px-2  font-bold my-5 bg-white shadow-sm shadow-black `}
          >
            {buttonName.map((item, index) => (
              <button
                key={index}
                onClick={() => setGeneration(item.value)}
                className={`${
                  generation === item.value ? "border-b-2" : ""
                } border-blue-500  px-2`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" ">
        <Card pokemon={filterData} />
      </div>

      <div className="hidden justify-center my-5">
        <button
          onClick={() => setUrl(nextUrl)}
          className="bg-blue-700 text-white px-3 py-2 rounded-xl"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default MainPage;
