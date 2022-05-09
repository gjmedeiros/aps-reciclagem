import { Button } from "react-bootstrap";
import "./styles.css";

function Landing() {
  return (
    <div id="landing" className="container">
      <div className="block-grid">
        <div className="card-item">
          <Button>Impacto no meio Ambiente</Button>
        </div>
        <div className="card-item">
          <Button>Reaproveitamento</Button>
        </div>
        <div className="card-item">
          <Button>Teste</Button>
        </div>
        <div className="card-item">
          <Button>Teste</Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
