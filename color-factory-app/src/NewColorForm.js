import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({addNewColor}) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    name: "",
    color: "black"
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewColor(formData); //add the todo in the parent state
    navigate("/colors");
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  // render form
  return (
    <div className="NewColorForm-wrapper">
      <form onSubmit={handleSubmit} className="NewColorForm">
        <label htmlFor="name">Color Name</label>
        <input
          className="NewColorForm-input-name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="violet"
          required
        />
        <label htmlFor="name">Color Choice</label>
        <input
          className="NewColorForm-input-color"
          type="color"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <button className="NewColorForm-button">Add</button>
      </form>
    </div>
    
  )

}

export default NewColorForm;