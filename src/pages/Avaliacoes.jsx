import { Link } from "react-router-dom";

export default function Avaliacoes() {

  // 🔹 LISTA DE AVALIAÇÕES
  const avaliacoes = [
    {
      id: 1,
      titulo: "Registro de Imóveis",
      questoes: 10,
      tempo: "10 min",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
    },
    {
      id: 2,
      titulo: "Contratos Imobiliários",
      questoes: 8,
      tempo: "8 min",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    },
    {
      id: 3,
      titulo: "Direito Notarial",
      questoes: 12,
      tempo: "12 min",
      imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
    }
  ];

  return (
    <div style={container}>

      {/* 🔹 TÍTULO */}
      <h1 style={{ marginBottom: "10px" }}>Avaliações</h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Escolha uma avaliação para iniciar
      </p>

      {/* 🔹 GRID */}
      <div style={grid}>

        {avaliacoes.map((item) => (
          <div key={item.id} style={card}>

            {/* 🔹 IMAGEM */}
            <img src={item.imagem} style={img} />

            {/* 🔹 CONTEÚDO */}
            <div style={content}>
              <h3>{item.titulo}</h3>

              <p style={{ fontSize: "13px", color: "#777" }}>
                {item.questoes} questões • {item.tempo}
              </p>

              {/* 🔹 BOTÃO */}
              <Link to={`/quiz/${item.id}`}>
                <button style={btn}>
                  Iniciar Avaliação
                </button>
              </Link>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

/////////////////////////////////////////////////////

/* 🔹 CONTAINER */
const container = {
  padding: "40px",
  background: "#f5f7fa",
  minHeight: "100vh"
};

/* 🔹 GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px"
};

/* 🔹 CARD */
const card = {
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column"
};

/* 🔹 IMAGEM */
const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover"
};

/* 🔹 CONTEÚDO */
const content = {
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  flex: 1
};

/* 🔹 BOTÃO */
const btn = {
  marginTop: "auto",
  padding: "12px",
  background: "#1E90FF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  width: "100%"
};