import React from "react";
import { Link } from "@reach/router";

export default function Pet(props) {
  var { animal, name, breed, media, location, id } = props;

  var hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>{`${animal} — ${breed} — ${location}`}</h3>
      </div>
    </Link>
  );
}
