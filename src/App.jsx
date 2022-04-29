
import { Container } from "react-bootstrap";
import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicLibrary from "./Components/MusicLibrary";


function App() {
  return (
    <div>
      <SearchBar/> 
      <NavigationBar/>
      <Container><MusicLibrary/></Container>

    </div>
  );
}

export default App;
