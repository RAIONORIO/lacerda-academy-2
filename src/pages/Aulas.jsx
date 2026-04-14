export default function Aulas() {
  const cursos = [
    {
      id: 1,
      titulo: "Regularização Fundiária",
      descricao: "Entenda os processos e etapas na prática.",
      aulas: 12,
      tempo: "2h 30min",
      imagem: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
    },
    {
      id: 2,
      titulo: "Contratos Imobiliários",
      descricao: "Domine a elaboração e análise de contratos.",
      aulas: 8,
      tempo: "1h 50min",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    },
    {
      id: 3,
      titulo: "Direito Notarial",
      descricao: "Atuação prática em cartório e registros.",
      aulas: 10,
      tempo: "2h 10min",
      imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
    }
  ];

  return (
    <div style={{
      background: "#f5f7fa",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <h1 style={{ marginBottom: "10px" }}>Aulas</h1>
      <p style={{ marginBottom: "30px", color: "#555" }}>
        Escolha um conteúdo para começar seus estudos
      </p>

      <div style={grid}>
        {cursos.map((curso) => (
          <div key={curso.id} style={card}>

            {/* IMAGEM */}
            <img src={curso.imagem} style={imgStyle} />

            <div style={{ padding: "15px" }}>
              <h3>{curso.titulo}</h3>

              <p style={{ fontSize: "13px", color: "#777" }}>
                {curso.aulas} aulas • {curso.tempo}
              </p>

              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                {curso.descricao}
              </p>

              <button style={btn}>
                Assistir
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

/* ESTILOS */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px"
};

const card = {
  background: "#fff",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "0.3s"
};

const imgStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover"
};

const btn = {
  marginTop: "15px",
  width: "100%",
  padding: "12px",
  background: "#1E90FF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};