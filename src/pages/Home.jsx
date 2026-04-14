import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: "#0A2540",
        color: "white",
        padding: "80px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }}>

        <div style={{ maxWidth: "500px" }}>
          <h1 style={{
            fontSize: "48px",
            lineHeight: "1.2",
            marginBottom: "20px",
            letterSpacing: "0.5px"
          }}>
            Mestre em Direito <br />
            Imobiliário e Notarial
          </h1>

          <p style={{
            fontSize: "18px",
            opacity: 0.8,
            lineHeight: "1.6"
          }}>
            Aprenda na prática com conteúdos objetivos, atualizados e focados no mercado.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button style={primaryButton}>Começar Agora</button>
            <button style={secondaryButton}>Ver Aulas</button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
          alt="Direito"
          style={heroImg}
        />
      </section>

      {/* BENEFÍCIOS */}
      <section style={{
        padding: "60px 20px",
        background: "#f5f7fa",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "40px" }}>
          O que você vai aprender
        </h2>

        <div style={grid}>

          <div style={card}>
            <img src="https://i.pinimg.com/736x/fb/90/ef/fb90ef7566a58359efb34efee4fe66eb.jpg" style={imgStyle} />
            <h3>Prática Real</h3>
            <p>Conteúdo aplicado ao dia a dia profissional.</p>
          </div>

          <div style={card}>
            <img src="https://i.pinimg.com/1200x/6d/a6/43/6da643fe156d6777650c0da520b5db37.jpg" style={imgStyle} />
            <h3>Conteúdo Atualizado</h3>
            <p>Baseado nas práticas mais recentes do mercado.</p>
          </div>

          <div style={card}>
            <img src="https://i.pinimg.com/1200x/4e/c0/fe/4ec0fe5355c671eef3c7c7bf69b279ef.jpg" style={imgStyle} />
            <h3>Didática Simples</h3>
            <p>Aprendizado direto, sem enrolação.</p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2>Comece agora sua evolução profissional</h2>

        <Link to="/aulas">
          <button style={{ ...primaryButton, marginTop: "20px" }}>
            Acessar Plataforma
          </button>
        </Link>
      </section>

    </div>
  );
}

/* ESTILOS */

const primaryButton = {
  padding: "12px 25px",
  background: "#1E90FF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer"
};

const secondaryButton = {
  padding: "12px 25px",
  background: "transparent",
  color: "white",
  border: "1px solid white",
  borderRadius: "5px",
  cursor: "pointer"
};

const card = {
  padding: "20px",
  borderRadius: "15px",
  background: "#fff",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
};

const imgStyle = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "15px"
};

const heroImg = {
  width: "350px",
  height: "350px",
  objectFit: "cover",
  borderRadius: "20px",
  marginTop: "20px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.4)"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};