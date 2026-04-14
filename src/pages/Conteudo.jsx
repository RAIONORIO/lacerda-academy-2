export default function Conteudo() {

  // 🔹 LISTA DE MATERIAIS
  const materiais = [
    {
      id: 1,
      titulo: "Manual de Registro de Imóveis",
      tipo: "E-book",
      tempo: "12 min",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
    },
    {
      id: 2,
      titulo: "Guia de Contratos Imobiliários",
      tipo: "Artigo",
      tempo: "8 min",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    },
    {
      id: 3,
      titulo: "Checklist Notarial Completo",
      tipo: "Material",
      tempo: "5 min",
      imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
    }
  ];

  return (
    <div style={container}>

      {/* 🔹 TÍTULO */}
      <h1 style={{ marginBottom: "10px" }}>Conteúdo</h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Materiais, artigos e ebooks disponíveis
      </p>

      {/* 🔹 GRID DOS CARDS */}
      <div style={grid}>

        {materiais.map((item) => (
          <div key={item.id} style={card}>

            {/* 🔹 IMAGEM */}
            <img src={item.imagem} style={img} />

            {/* 🔹 CONTEÚDO DO CARD */}
            <div style={cardContent}>

              {/* 🔹 TAG (E-book / Artigo / etc) */}
              <span style={tag}>{item.tipo}</span>

              {/* 🔹 TÍTULO */}
              <h3 style={{ marginTop: "10px" }}>
                {item.titulo}
              </h3>

              {/* 🔹 TEMPO */}
              <p style={{ fontSize: "13px", color: "#777" }}>
                {item.tempo} de leitura
              </p>

              {/* 🔹 BOTÃO (FIXO NO FINAL) */}
              <button style={btn}>
                Acessar
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

///////////////////////////////////////////////////////////////

/* 🔹 CONTAINER PRINCIPAL */
const container = {
  padding: "40px",
  background: "#f5f7fa",
  minHeight: "100vh"
};

/* 🔹 GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  alignItems: "stretch" // 🔥 garante mesma altura
};

/* 🔹 CARD (CORREÇÃO PRINCIPAL AQUI) */
const card = {
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",           // 🔥 ativa flex
  flexDirection: "column",   // 🔥 organiza vertical
  height: "100%"             // 🔥 força mesma altura
};

/* 🔹 IMAGEM */
const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover"
};

/* 🔹 CONTEÚDO DO CARD */
const cardContent = {
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  flex: 1                  // 🔥 ocupa espaço total
};

/* 🔹 TAG */
const tag = {
  background: "#1E90FF",
  color: "#fff",
  padding: "4px 10px",
  borderRadius: "5px",
  fontSize: "12px",
  width: "fit-content"
};

/* 🔹 BOTÃO */
const btn = {
  marginTop: "auto",       // 🔥 ESSA LINHA resolve seu problema
  width: "100%",
  padding: "10px",
  background: "#0A2540",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};