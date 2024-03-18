import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Componentes/Home/Home'
import Sobremim from './Componentes/Sobremim/Sobremim'
import Meusprojetos from './Componentes/Meusprojetos/Meusprojetos'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Habilidades from './Componentes/Habilidades/Habilidades';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Sobremim",
      element: <Sobremim/>
    },
    {
      path: "/Meusprojetos",
      element: <Meusprojetos/>
    },
    {
      path: "/habilidades",
      element: <Habilidades/>
    }
    
  ]);
   
  return (
    <RouterProvider router={router} />
  )
}

export default App
