import React, { useState } from 'react';
import ColorList from './ColorsList';
import NewColorForm from './NewColorForm';
import Color from './Color';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function AppRoutes() {
  const INITIIAL_COLORS = [
    {
      name: "pink",
      color: "#AD038E"
    },
    {
      name: "blue",
      color: "#0600AD"
    },
    {
      name: "green",
      color: "#09AD00"
    }
  ]

  const [colors, setColors] = useState(INITIIAL_COLORS);

  const addNewColor = (formData) => {
    setColors((colors) => {
      return [...colors, formData]
    })
  }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/colors/new" element={<NewColorForm addNewColor={addNewColor} />} />
          <Route path="colors/:color" element={<Color colors={colors}/>} />
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route path="*" element={<Navigate replace to="/colors" />} />
        </Routes>
      </BrowserRouter>
      
  );
}


export default AppRoutes;
