import { Container, Row, Col, Card} from "react-bootstrap"

const SingleBook = (props)=>{
    return(
        <Container>
            <Row>
                <Col>
                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.book.img}/>
                        <Card.Body>
                            <Card.Title>{props.book.title}</Card.Title>
                        </Card.Body>
                    </Card>
                
                </Col>
            </Row>
        </Container>
    )
}
export default SingleBook 