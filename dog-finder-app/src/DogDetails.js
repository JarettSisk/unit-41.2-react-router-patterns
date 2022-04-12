import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DogDetails.css";

const DogDetails = ({dogs}) => {
  const params = useParams();
  
  // based on the url param, show details about specific dog
  const renderDog = () => {
    try {
      // returns an array containing the matching dog
      let dog = dogs.filter(d => {
        return d.name === params.name;
      })

      let { age, name, src, facts } = dog[0];

      return (
        <>
          <h1>Hello, my name is {name}!</h1>
          <img className="DogDetails-image" src={src} alt={name}></img>
          <p>Age: {age}</p>
          <h2> Some fun facts about me</h2>
          <ul>
            {facts.map((f) => <li>{f}</li>)}
          </ul>
        </>
      )
    } catch (error) {
      // If no matching dogs:
      return <h1>Oops, could not find a dog with that name!</h1>
    }
  };

  return (
    <div className="DogDetails">
      {renderDog()}
      <Link to="/dogs">Go Back</Link>
    </div>
  )
  
}

export default DogDetails;
