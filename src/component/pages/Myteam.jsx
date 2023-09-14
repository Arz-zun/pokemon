import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Myteam = () => {
  const myteam = useSelector((state) => state.myteam.myTeamList);
  console.log("mye teamn", myteam);
  return (
    <div className="my-5">
      <Card pokemon={myteam} />
    </div>
  );
};

export default Myteam;
