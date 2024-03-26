import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import ListaConselhos from "./components/ListaConselhos";

function App() {
  const [conselhos, setConselhos] = useState([]);

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const novoConselho = response.data.slip.advice;
    setConselhos([...conselhos, novoConselho]);
    console.log(conselhos);
  } 

  return (
    <div className="App">
      
      <ListaConselhos itens={conselhos} />
      <button onClick={getAdvice}>
        Clique aqui para obter um conselho!
      </button>
      
    </div>
  );
}

export default App;
