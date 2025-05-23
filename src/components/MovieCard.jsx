import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-34 md:w-48 pr-4">
      <img className="" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
