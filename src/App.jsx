import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Toggler from "./components/Toggler/Toggler";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Toggler />
    </div>
  );
}

export default App;
