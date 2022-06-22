import { Component } from "react";
import SingleBook from "./SingleBook";


class BookList extends Component{
    render(){
        return(
            this.props.list.map(book=>(<SingleBook category="this.props.list"/>))
            
        )
    }
}
export default BookList