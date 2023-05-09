ReactJS
Criar um projeto
npx create-next-app@latest nome-projeto
Instalar o bootstrap
npm install react-bootstrap bootstrap
Axios para API
npm i axios
Iniciar o projeto
npm run dev
Base do código
import React from "react";

const index = () => {
  return <div>index</div>;
};

export default index;
rafce

Componentes
pages/index.jsx

import React from "react";
import Cabecalho from "../components/Cabecalho";

const Home = () => {
  return (
    <div>
      <Cabecalho />
    </div>
  );
};

export default Home;
componentes/Cabecalho.jsx

import React from "react";

const Cabecalho = () => {
  return <div>Cabeçalho</div>;
};

export default Cabecalho;
Componentes com Props
Componente pai
const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className="bg-secondary py-3 text-white text-center mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

      <div
        style={{ width: "100%" }}
        className="bg-secondary position-fixed bottom-0 py-3 text-white text-center"
      >
        <p>Todos os direitos reservados®</p>
      </div>
    </>
  );
};
Componente filho
const Home = () => {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <Container>
          <h1>Hello World</h1>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </Container>
      </Pagina>
    </>
  );
};
Map
{
  carros.map((carro, index) => <p key={index}>{carro}</p>);
}
getServerSideProps
Substitui o uso do useEffect

export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(
    `/movie/popular/?api_key=<<suachave>>&language=pt-BR`
  );
  const filmes = await resultado.data;
  return {
    props: { filmes }, // will be passed to the page component as props
  };
}
