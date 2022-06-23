import { Component } from "react";
import {Card, Container, Row, Col} from "react-bootstrap"


class Reviews extends Component{
    state = {
        reviews: []
    }
    componentDidMount = () => {
        this.reviewsFetch()
    }

    reviewsFetch= async()=>{
        try {
           const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
            method: "GET",
            headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzMzk4MjdmZmQ0OTAwMTU4YTdhOTkiLCJpYXQiOjE2NTU5ODgwMTMsImV4cCI6MTY1NzE5NzYxM30.uQGe2ERfSABRxFLzCUKoCFbg5TV6X0us_P_-TI9n-Us"}
           })
           if (response.ok){
            const data = await response.json()
            console.log(data)
            this.setState({
                reviews: data
           })
           }else{
            const error = await response.text()
           } 
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <Container>
            <h2>Reviews</h2>
            <Row>
                
            {this.state.reviews.map((review, index) =>(
                <Col xs={6} md={4} lg={3} key={index}>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    
                    <Card.Subtitle className="mb-2 text-muted">Rating ={review.rate}</Card.Subtitle>
                    <Card.Text>
                        Comments:{review.comment}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>))}
                
                </Row>
            </Container>
        )
    }
}
export default Reviews