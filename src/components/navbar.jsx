import { useState } from 'react';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <div onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </div>
            <ul>
                <li><a to="/">Login</a></li>
                <li><a to="/agenda">Agenda</a></li>
                <li><a to="/cadastro">Cadastro</a></li>
                <li><a to="/calendario">Calendário</a></li>
            </ul>
        </Nav>
    )
}

const Nav = Styleed.nav`
    dispelay: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;  
    margin: 0 auto;
`

