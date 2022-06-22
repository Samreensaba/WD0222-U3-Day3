import { Component } from "react";
import {Badge} from "react-bootstrap"

class MyBadge extends Component{
    render(){
        return(
            <div>
                <Badge className="bg-primary" style={{color:this.props.textColor}}>{this.props.text}</Badge>
                
            </div>
        )
    }
}
export default MyBadge