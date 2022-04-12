import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

const DogList = ({dogs}) => {
  const renderDogs = () => {
    return (
      <ul className="DogList-list">
        {dogs.map((dog) => {
          return <li className="DogList-list-item"><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
        })}
      </ul>
    ) 
  }

  console.log(renderDogs())

  return (
    <div className="DogList">
      <h1>Find Your Favorite Dog!</h1>
      {renderDogs()}
    </div>
  )
}

export default DogList;
