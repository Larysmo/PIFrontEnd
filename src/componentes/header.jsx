import { NavLink, useNavigate } from "react-router-dom";
import './header.css'
import logo0 from '../assets/logo0.jpg'


export default function Header(props) {
  const navigate = useNavigate()

  function handleClick(event) {
    props.onLogout()
    navigate("/login")
  }
  return (
    <header>
      <div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/grade">Grade Horaria</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <img src={logo0} alt="logomarca" width={50}/> 
          <li><NavLink to="/financeiro">Financeiro</NavLink></li>
          <li><NavLink to={`/sobre/${props.usuarioID}`}>Sobre</NavLink></li>
          <li><button className="sair" onClick={handleClick}>Sair</button></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}