import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./NewTodoForm.css";

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
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <input
        className="NewColorForm-input-name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="purple"
        required
      />
      <input
        className="NewColorForm-input-color"
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
      />
      <button className="NewColorForm-button">ADD</button>
    </form>
  )

}

export default NewColorForm;