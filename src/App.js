import "./styles.css";
import { IconContext } from "react-icons";
import { PokemonList } from "./components/PokemonList";
import { SerachDisp } from "./components/SerachDisp";

export default function App() {
  return (
    <IconContext.Provider value={{ size: "1.8rem" }}>
      <SerachDisp />
      <div className="App">
        <h1>Hello Pkemon Factory</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PokemonList />
        <input type="date" />
        <input type="time" />
        <input type="datetime-local" />
      </div>
    </IconContext.Provider>
  );
}
