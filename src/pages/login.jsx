import styled from "styled-components";

export const Login = () => {
    return (
        <Divform>
            <h1>Login</h1>

            <Form>
                <div>
                    <label htmlFor="username">Nome:</label> 
                    <input type="text" id="username"    name="username" placeholder="Nome de usuário"/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label> 
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" /> 
                </div>
                <button type="submit">Login</button>    
            </Form>
                        
        </Divform>
    );
}

const Divform = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    color: #242424;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    paping: 20px;
    gap: 10px;

    input {
        padding: 5px;
        border: solid 1px #ccc;
        border-radius: 5px;
        width: 200px;
        }
        label {
        font-weight: 500;
        }

    button {
        margin-top: 15px;
        padding: 10px; 
        background-color: #242424;
        color: #ffffff;
        border: none;
        border-radius: 8px;
        cursor: pointer; 
        width: 150px;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: #000000;
        }   
    `

