import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerFluid() {
  return (
    <Container fluid className='NavTxt'>
      <Row>
        <Col>
        <h1>Greatest selection of fake stuff</h1>
        <p>Fake it till you make it</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerFluid;