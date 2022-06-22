import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook"
import history from "./data/books/history.json"
import fantasy from "./data/books/fantasy.json"

function App() {
  return (
    <div className="App">
    <WarningSign text="This a an Alert"/>
    <MyBadge textColor="black" text="Badge"/>
    <BookList list={fantasy}/>
     
    </div>
  );
}

export default App;
