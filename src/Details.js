import React from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    // throw new Error("lol"); // to test ErrorBoundary
    pet
      .animal(+this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="details">
          <h2>loading ...</h2>
        </div>
      );
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
