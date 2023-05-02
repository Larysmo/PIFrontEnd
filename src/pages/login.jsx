import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Section from "../componentes/section"
import './login.css'
import logo from '../assets/logo1.png'


export default function Login(props){
    
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    function handleClick(event){
        props.onLogin()
        navigate("/")
    }

    function handleFocus(event){
        console.log("entrou do campo email")
    }
    function handleBlur(event){
        console.log("saiu do campo email")
    }

    function handleChange(event){
        setEmail(event.target.value)
    }

    return( 
        <div className="telalogin">
            <img src={logo} alt="logomarca" className="logomarca"/> 
            <Section titulo="Faculdade de Ciência em Tecnologia">
               <input type="email" placeholder="e-mail" onChange={handleChange} 
                onFocus={handleFocus} onBlur={handleBlur} />
                <input type="password" placeholder="senha"/>
                <button onClick={handleClick}>Entrar</button>
            </Section>
        </div>
    )    
}