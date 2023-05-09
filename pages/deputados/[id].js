import apiDeputados from "@/services/apiDeputados";
import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const index = ({ deputados, despesas, profissoes }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={deputados.urlFoto} />
            <Card.Body>
              <Card.Title className="text-black">{deputados.nome}</Card.Title>
              <Card.Text className="text-black">
                Partido: {deputados.siglaPartido}
                <br />
                Uf: {deputados.siglaUf}
              </Card.Text>
            </Card.Body>
          </Card>
          <Button href="/deputados" variant="danger">
            Voltar
          </Button>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map((item) => (
                <tr>
                  <td>{item.dataDocumento}</td>
                  <td>{item.tipoDespesa}</td>
                  <td>{item.valorLiquido}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h1>Profissoes {profissoes.length}</h1>
          <ul>
            {profissoes.map((item) => (
              <li>{item.titulo}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiDeputados.get(`/deputados/${id}`);
  const deputados = await resultado.data.dados.ultimoStatus;

  const resDespesas = await apiDeputados.get(`/deputados/${id}/despesas`);
  const despesas = resDespesas.data.dados;
  const resProfissoes = await apiDeputados.get(`/deputados/${id}/profissoes`);
  const profissoes = resProfissoes.data.dados;
  return {
    props: { deputados, despesas, profissoes }, // will be passed to the page component as props
  };
}
