import React from "react";
import { Link, useParams } from "react-router-dom";

const Color = ({colors}) => {
  let params = useParams();
  // render color based on url params
  const renderColor = () => {
    const color = colors.filter(c => c.name === params.color)[0];
    // TODO: need to return output
    
    return (
    <div className="Color" style={{backgroundColor: color.color}}>
      <h1 className="Color-title">{color.name.toUpperCase()}</h1>
      <Link to="/colors">Go Back</Link>
    </div>

    )
  }
  return renderColor()
}

export default Color;