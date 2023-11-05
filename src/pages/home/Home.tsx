import './Home.css'
import React, {useState, useEffect} from 'react'
// import homeLogo from '../../assets/sukuna.jpeg'

// interface minhaProps{
//   title: string;
//   description: string;
// }

/*const Home = () =>{
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns, você concluiu a tarefa!');
    }
  },[completed])
*/

// function home(props:minhaProps) {
  const Home = () =>{
      const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
        {loggedIn ? (
          <h1>Bem vinde de volta!</h1>
        ):(
          <button onClick={() => setLoggedIn(true)}>Entrar</button>
        )
       }

       {/* <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button> */}
    </div>

    // <>
    //   <h2>{props.title}</h2>
    //   <p>{props.description}</p>
    // </>
    // <div className='body'>
    //     <h1 className ='titulo'>PRIMEIRO PROJETO REACT AUEHUAHEU</h1>
        
    //     <img src={homeLogo} className='img' alt="Imagem tela inicial"/>
    // </div>
  )
  }
// }

export default Home
