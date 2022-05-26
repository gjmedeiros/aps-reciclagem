import { Button } from "react-bootstrap";
import Map from "../maps/map";
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
          <Button>Reciclando</Button>
          <div className="list-reaprov">
            <p>
              Então, surge a questão: o que fazer com o óleo de cozinha usado?
              Bem, atualmente, a melhor opção é realizar a coleta seletiva desse
              óleo, colocando-o em garrafas PET e destinando-as à reciclagem.
              Essa reciclagem do óleo de cozinha usado pode ser feita em casa
              mesmo ou podemos levá-lo para postos de coleta, busque por
              instituições ou empresas que prestam coleta seletiva para que esse
              material seja descartado corretamente e utilizado para produção de
              biodiesel, tintas a óleo e até sabão.
            </p>
          </div>
        </div>

        <div className="card-item">
          <Button>Por que reciclar ?</Button>
          <div className="what-impact">
            <p>
              É de extrema importância reciclar o óleo de cozinha, pois a
              capacidade poluente da substância é muito alta: apenas um litro de
              óleo é capaz de poluir cerca de um milhão de litros de água, ou
              seja, o equivalente a quantidade média consumida por uma pessoa
              durante 14 anos.
              <br />A poluição causada óleo na água prejudica a oxigenação,
              matando plantas e peixes na região ou deixando-os doentes.
              <br />
              Se o óleo for despejado diretamente no esgoto, ele encarece o
              tratamento deste em cerca de 45%. Além de todos esses problemas,
              ele ainda causa mau cheiro e pode provocar entupimento, ajudando a
              causar refluxos e alagamentos.
              <br />
              Para evitar todos esses problemas é só adotar uma postura mais
              consciente, evitando usar óleo desnecessariamente e coletando o
              mesmo para a reciclagem. O ideal é colocá-lo em uma garrafa de
              plástico transparente, e entregar em algum posto de coleta na
              cidade.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <strong>Pontos de Coleta</strong>
      </div>
      <div className="block-map">
        <div className="map-google" id="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Landing;
