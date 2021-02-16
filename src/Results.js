import React from "react";
import Pet from "./Pet";

function Results({ pets }) {
  //expect prop pets
  if (pets.length > 0) {
    return (
      <div className="search">
        {pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={
              pet.contact.address.city + " " + pet.contact.address.state
            }
            id={pet.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="search">
        <h1>No Pets Found</h1>
      </div>
    );
  }
}

export default Results;
