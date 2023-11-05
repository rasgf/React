import './App.css';
import Home from "./pages/home/Home"
import React, {useState} from 'react';

function App() {

  /*cria uma lógica para um botão que adiciona um contaodr onde a cada click, aumenta o número em mais 1*/
  // const [valor, setValor] = useState(0);
  // function handleClick(){
  //   setValor(valor+1);
  // }
  return (

    <div>
      <Home/>
      {/* <h1>App</h1>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button> */}
    </div>
  )
}
export default App
