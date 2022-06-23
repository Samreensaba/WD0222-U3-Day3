import {Component} from "react"
import {Card, Button } from "react-bootstrap"
import Reviews from "./Reviews"

class SingleBook extends Component{
    state={
        selected:false,
        asin:""
    }
    review=()=>{
        
        <Reviews asin={this.props.book.asin}/>
    }
    render(){
        return(
                   
            <Card style={{ width: '18rem' }} 
            >
                <Card.Img variant="top" src={this.props.book.img}/>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Link href="#"><Button onClick={this.review}>Comments</Button></Card.Link>
                </Card.Body>
                
            </Card>
            
        )
    }
}
export default SingleBook 