import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; 
import Home from "./pages/Home";
import Aulas from "./pages/Aulas";
import Conteudo from "./pages/Conteudo";
import Avaliacoes from "./pages/Avaliacoes";
import Progresso from "./pages/Progresso";
import Podcast from "./pages/Podcast";

function App() {

  // 🔹 ESTADO DO MENU
  const [menuAberto, setMenuAberto] = useState(false);

  // 🔹 REFERÊNCIA DO MENU
  const menuRef = useRef(null);

  // 🔹 FECHAR AO CLICAR FORA
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <BrowserRouter>
      
      {/* MENU */}
      <nav style={navStyle}>

        {/* LOGO */}
        <h2>Lacerda Academy</h2>

        {/* BOTÃO MENU */}
        <div ref={menuRef} style={{ position: "relative" }}>
          
          <button 
            onClick={() => setMenuAberto(!menuAberto)} 
            style={menuBtn}
          >
            ⋮
          </button>

          {/* DROPDOWN */}
          {menuAberto && (
            <div style={dropdown}>
              <Link to="/" style={dropdownItem} onClick={() => setMenuAberto(false)}>Início</Link>
              <Link to="/aulas" style={dropdownItem} onClick={() => setMenuAberto(false)}>Aulas</Link>
              <Link to="/conteudo" style={dropdownItem} onClick={() => setMenuAberto(false)}>Conteúdo</Link>
              <Link to="/avaliacoes" style={dropdownItem} onClick={() => setMenuAberto(false)}>Avaliações</Link>
              <Link to="/progresso" style={dropdownItem} onClick={() => setMenuAberto(false)}>Progresso</Link>
              <Link to="/podcast" style={dropdownItem} onClick={() => setMenuAberto(false)}>Podcast</Link>
            </div>
          )}

        </div>

      </nav>

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>

    </BrowserRouter>
  );
}

/* ================= ESTILOS ================= */

// NAVBAR
const navStyle = {
  padding: "20px 40px",
  background: "#0A2540",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  borderBottom: "1px solid #ffffff20"
};

// BOTÃO ⋮
const menuBtn = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "22px",
  cursor: "pointer"
};

// DROPDOWN
const dropdown = {
  position: "absolute",
  top: "35px",
  right: "0",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  minWidth: "180px",
  zIndex: 1000
};

// ITEM
const dropdownItem = {
  padding: "10px",
  textDecoration: "none",
  color: "#333",
  borderRadius: "6px"
};

export default App;