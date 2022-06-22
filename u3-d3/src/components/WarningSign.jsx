import { Alert } from "react-bootstrap";
import { Component } from "react";


class WarningSign extends Component{
    render(){
        return(
            <Alert variant="danger">
      
                <p>
                  {this.props.text}
                </p>
      
            </Alert>
        )
    }
}
export default WarningSign