import { Component } from "react";
import { Container, Row, Col, Form  } from "react-bootstrap";
import SingleBook from "./SingleBook";


class BookList extends Component{
    state = {
        searchQuery:""
    }
    render(){
        return(
            
            <Container>
                
                    
                    <Form.Group>
                        <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Search here"
                    value={this.searchQuery}
                    onChange={event=> this.setState({searchQuery: event.target.value})} />
            
                  </Form.Group>
                    
                
                <Row>
                    {
                    this.props.books.slice(0,12).filter(mappedBook => mappedBook.title.toLowerCase().includes(this.state.searchQuery)).map(mappedBook=>(
                        <Col key={mappedBook.asin}>
                        <SingleBook book={mappedBook}/>
                        </Col>

                    )
                    )}
                </Row>
            </Container>
            
        )
    }
}
export default BookList