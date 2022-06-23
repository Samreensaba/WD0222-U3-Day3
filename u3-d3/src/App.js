import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook"
import history from "./data/books/history.json"
import fantasy from "./data/books/fantasy.json"
import MyNav from "./components/MyNav";
import Reviews from "./components/Reviews"

function App() {
  return (
    <div className="App">
    <MyNav/>
    <WarningSign text="This a an Alert"/>
    <MyBadge textColor="black" text="Badge"/>
    <BookList books={history}/>
    <Reviews/>
     
    </div>
  );
}

export default App;
