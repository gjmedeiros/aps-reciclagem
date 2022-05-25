import { Button } from "react-bootstrap";
import Map from "../maps/map"
import "./styles.css";

function Landing() {
  
  return (
    <div id="landing" className="container">
      <div className="block-grid">
        <div className="card-item">
          <Button>Impacto no meio Ambiente</Button>
          <div className="text-impact">
            <p>
              Devemos reciclar para a preservação da biodiversidade; Reciclar
              implica em gerar menos lixo, menos esgoto, e assim contribuir para
              um ambiente mais sadio; Cada litro de óleo despejado no esgoto tem
              capacidade para poluir cerca de 1 milhão de litros de
              água(SABESP); <br /> O óleo impermeabiliza o solo podendo
              ocasionar o aumento das enchentes; Image O óleo cria uma fina
              camada da superfície da água, prejudicando a oxigenação da água
              dos rios, causando danos à vida aquática; <br />O óleo quando
              descartado no esgoto doméstico pode causar entupimento das
              tubulações causando refluxo do esgoto; Em processo de
              decomposição, o óleo libera o gás metano que, além do mau cheiro,
              agrava o efeito estufa. Todos os tipos de óleo não podem ter como
              destino pias, bueiros, ralos ou guias da calçada porque impactam
              negativamente o encanamento da sua casa e também poluem a água,
              além de contribuírem para morte de seres vivos.
            </p>
          </div>
        </div>

        <div className="card-item">
          <Button>Reaproveitamento</Button>
          <div className="list-reaprov">
            <ul>
              <li>Sabão</li>
              <li>Biodiesel</li>
            </ul>
          </div>
        </div>

        <div className="card-item">
          <Button>Por que reciclar ?</Button>
          <div className="what-impact">
            <p>
              Devemos reciclar para a preservação da biodiversidade; Reciclar
              implica em gerar menos lixo, menos esgoto, e assim contribuir para
              um ambiente mais sadio; Cada litro de óleo despejado no esgoto tem
              capacidade para poluir cerca de 1 milhão de litros de
              água(SABESP); <br /> O óleo impermeabiliza o solo podendo
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <strong>Qual o método ideal para descarte?</strong>
      </div>
      <div className="map-google" id="map">
        <Map/>
      </div>
    </div>
  );
}

export default Landing;

