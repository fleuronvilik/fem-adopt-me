import React from "react";

export default function Pet(props) {
  var { animal, name, breed, media, location, id } = props;

  var hero = "https://placecorgi.com/300/300"; // default
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>{`${animal} — ${breed} — ${location}`}</h3>
      </div>
    </a>
  );
}
