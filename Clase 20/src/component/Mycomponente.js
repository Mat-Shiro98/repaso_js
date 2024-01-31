import {Container, Row, Col, Button} from 'react-bootstrap';

const Mycomponente = () => {
    return(
        <Container>
            <Row>
                <Col>
                <h1>Hola Mundo!</h1>
                <p>lorem  ipsum dolor sit amet...</p>
                <Button variant="primary">Botón de Bootstrap</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Mycomponente;