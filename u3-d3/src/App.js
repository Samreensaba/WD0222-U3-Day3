import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook"
import history from "./data/books/history.json"
import fantasy from "./data/books/fantasy.json"
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
    <MyNav/>
    <WarningSign text="This a an Alert"/>
    <MyBadge textColor="black" text="Badge"/>
    <BookList books={history}/>
     
    </div>
  );
}

export default App;
