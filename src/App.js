import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
        <Header/>
        <Description/>
    </div>
  );
}

export default App;
