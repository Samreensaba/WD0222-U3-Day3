import {Component, Container} from "react"
import {Card} from "react-bootstrap"

class SingleBook extends Component{
    render(){
        return(        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.book.img}/>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
export default SingleBook 