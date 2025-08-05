import styled from 'styled-components';

export const Agenda = () => {
    return (
        <Container>
            <Header>
                <h1>Meus Compromissos</h1>
                <button>Novo Compromisso</button>
            </Header>
            <Filtros>
                <input type="date" id='data'/>
                <select>
                    <option value="">Todos</option>
                    <option value="consulta">Consulta</option>
                    <option value="conta">Conta</option>
                    <option value="reuniao">Reunião</option>
                    <option value="evento">Evento</option>
                    <option value="tarefa">Tarefa Doméstica</option>
                </select>
            </Filtros>
            <Lista>
                <Item>
                    <strong>Título do Compromisso</strong>
                    <span>Data: 2025-08-05</span>
                    <span>Tipo: Consulta</span>
                </Item>
                {/* Outros itens de exemplo */}
            </Lista>
        </Container>
    );
}

const Container = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    h1 { font-size: 2rem; }
    button {
        background: #4f8cff;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 0.5rem 1.2rem;
        font-size: 1rem;
        cursor: pointer;
    }
`;

const Filtros = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

const Lista = styled.ul`
    list-style: none;
    padding: 0;
`;

const Item = styled.li`
    background: #f5f5f5;
    color: #333;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
