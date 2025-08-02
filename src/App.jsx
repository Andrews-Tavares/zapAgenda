import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Agenda } from './pages/agenda';
import { Cadastro } from './pages/cadastro';
import { Calendario } from './pages/calendario';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
}

export default App;
