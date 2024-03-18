import Logo from '../images/logo.png';
import{Link} from 'react-router-dom';
const Main = () => {
    return(
        <>
           <div className='home'>
        
            <div>
        <h1>Oi me chamo <span>Fellipe</span></h1>
        <h3>Sou desenvolvedor index</h3>
   </div>


   <div>
    <img className= 'sLogo'src={Logo} alt='Logo'/>
   </div>
  </div>


   <div className='menu'>
    <Link to="/Sobremim">Sobre mim</Link>
    <Link to="Meusprojetos">Meus Projetos</Link>
    <Link to="habilidades">Habilidades</Link>
   </div>
   </>
    )
}
export default Main;