// IMPORTS
import React from "react";

export default function Podcast() {

  // 🎧 LISTA DE EPISÓDIOS
  const episodios = [
    {
      id: 1,
      titulo: "Regularização de Imóveis na Prática",
      duracao: "15 min",
      imagem: "https://i.pinimg.com/736x/ec/3f/0a/ec3f0aac4993afed24d1f9c4be06f435.jpg"
    },
    {
      id: 2,
      titulo: "Contratos Imobiliários sem Erro",
      duracao: "20 min",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
    },
    {
      id: 3,
      titulo: "Cartório na Vida Real",
      duracao: "12 min",
      imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
    }
  ];

  return (
    <div style={container}>

      {/* TÍTULO */}
      <h1>Podcast</h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Aprenda ouvindo, no seu tempo
      </p>

      {/* GRID DE EPISÓDIOS */}
      <div style={grid}>
        {episodios.map((ep) => (
          <div key={ep.id} style={card}>

            {/* IMAGEM */}
            <img 
              src={ep.imagem} 
              style={img}
              onError={(e) => e.target.src = "https://via.placeholder.com/400x200"}
            />

            {/* CONTEÚDO */}
            <div style={content}>

              <h3 style={{ minHeight: "50px" }}>
                {ep.titulo}
              </h3>

              <p style={{ color: "#777", fontSize: "14px" }}>
                {ep.duracao}
              </p>

              {/* BOTÃO SEMPRE EMBAIXO */}
              <button style={playBtn}>▶ Ouvir</button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

/* ================= ESTILOS ================= */

// CONTAINER
const container = {
  padding: "40px",
  background: "#f5f7fa",
  minHeight: "100vh"
};

// GRID
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px"
};

// CARD (AGORA FLEX)
const card = {
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  height: "100%" // 🔥 garante altura igual
};

// IMAGEM
const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover"
};

// CONTEÚDO INTERNO
const content = {
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  flex: 1
};

// BOTÃO
const playBtn = {
  marginTop: "auto", // 🔥 joga botão pra baixo
  padding: "10px",
  width: "100%",
  background: "#1E90FF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};