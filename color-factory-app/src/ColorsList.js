import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors}) => {

  const renderColors = () => {
   return colors.map((color) => {
      return ( 
        <li className="ColorList-list-item">
          <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </li>
      )
    })
  }

  return (
    <div className="ColorList">
      <h1>Explore The World Of Colors!</h1>
      <Link to="/colors/new">Add A New Color!</Link>
      <ul className="ColorList-list">
          {renderColors()}
      </ul>
    </div>
    
  )
}

export default ColorList;