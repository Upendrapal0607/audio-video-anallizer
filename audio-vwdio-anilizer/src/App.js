import logo from "./logo.svg";
import "./App.css";
import { Navebar } from "./Componants/Navebar";
import { MainRoute } from "./MainRoute/MainRoute";
function App() {
  return (
    <div className="App">
      <Navebar />
      <MainRoute />
    </div>
  );
}

export default App;
