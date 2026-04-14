export default function Progresso() {

  // 🔹 DADOS (depois isso vem do backend)
  const cursos = [
    {
      id: 1,
      titulo: "Regularização Fundiária",
      progresso: 70
    },
    {
      id: 2,
      titulo: "Contratos Imobiliários",
      progresso: 45
    },
    {
      id: 3,
      titulo: "Direito Notarial",
      progresso: 20
    }
  ];

  // 🔹 CÁLCULO GERAL
  const progressoTotal =
    cursos.reduce((acc, c) => acc + c.progresso, 0) / cursos.length;

  return (
    <div style={container}>

      {/* 🔹 TÍTULO */}
      <h1>Seu Progresso</h1>
      <p style={{ color: "#555" }}>
        Acompanhe sua evolução nos estudos
      </p>

      {/* 🔹 CARD PRINCIPAL */}
      <div style={cardResumo}>

        <h2>{Math.round(progressoTotal)}%</h2>
        <p>Progresso geral</p>

        {/* 🔹 BARRA GERAL */}
        <div style={barraFundo}>
          <div style={{
            ...barraProgresso,
            width: `${progressoTotal}%`
          }} />
        </div>

      </div>

      {/* 🔹 LISTA DE CURSOS */}
      <div style={{ marginTop: "40px" }}>
        <h3>Seus cursos</h3>

        <div style={grid}>
          {cursos.map((curso) => (
            <div key={curso.id} style={cardCurso}>

              <h4>{curso.titulo}</h4>

              {/* 🔹 BARRA */}
              <div style={barraFundo}>
                <div style={{
                  ...barraProgresso,
                  width: `${curso.progresso}%`
                }} />
              </div>

              <p style={{ marginTop: "10px" }}>
                {curso.progresso}% concluído
              </p>

            </div>
          ))}
        </div>

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

/* 🔹 CARD RESUMO */
const cardResumo = {
  background: "#0A2540",
  color: "#fff",
  padding: "30px",
  borderRadius: "15px",
  marginTop: "20px",
  textAlign: "center"
};

/* 🔹 GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

/* 🔹 CARD CURSO */
const cardCurso = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
};

/* 🔹 BARRA FUNDO */
const barraFundo = {
  width: "100%",
  height: "10px",
  background: "#e0e0e0",
  borderRadius: "10px",
  marginTop: "10px"
};

/* 🔹 BARRA PROGRESSO */
const barraProgresso = {
  height: "100%",
  background: "#1E90FF",
  borderRadius: "10px"
};