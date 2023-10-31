import './Home.css'
import homeLogo from '../../assets/sukuna.jpeg'
function home() {
  return (
    <div className='body'>
        <h1 className ='titulo'>PRIMEIRO PROJETO REACT AUEHUAHEU</h1>
        <img src={homeLogo} className='img' alt="Imagem tela inicial"/>
    </div>
  )
}

export default home
