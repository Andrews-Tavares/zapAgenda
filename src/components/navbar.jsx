import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <div>
                <Img src="/images/favicon.png" alt="logo" />
                <h1>Zap Agenda</h1>
            </div>
            <Hamburguer onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </Hamburguer>

            <NavLinks open={open}>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/calendario">Calendário</Link></li>
            </NavLinks>
            
        </Nav>
    );
};

const Img = styled.img`
    width: 100px;
    height: auto;
    `

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #cccccc;

    div {
        display: flex; 
        align-items: center;
        gap: 10px;
        color: #515050ff;
     }
`;

const Hamburguer = styled.div`
    width: 30px;
    height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    span {
        display: block;
        height: 4px;
        background: #242424;
        border-radius: 2px;
        margin: 3px 0;
        transition: 0.3s;
    }
    @media (min-width: 700px) {
        display: none;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 20px;
    li a {
        padding: 10px;
        color: #242424;
        text-decoration: none;
        font-weight: 700;
    }
    @media (max-width: 700px) {
        position: absolute;
        top: 60px;
        right: 0;
        background: #cccccc;
        flex-direction: column;
        width: 180px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        transition: transform 0.3s ease;
        z-index: 10;
    }
`;

