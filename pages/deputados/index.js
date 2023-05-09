import apiDeputados from "@/services/apiDeputados";
import Link from "next/link";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const index = ({ deputados }) => {
  return (
    <Container>
      <Row>
        {deputados.map((rick) => (
          <Col>
            <Link href={`deputados/${rick.id}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={rick.urlFoto} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get("/deputados");
  const deputados = await resultado.data.dados;
  return {
    props: { deputados }, // will be passed to the page component as props
  };
}
