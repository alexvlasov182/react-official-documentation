import ContextObject from "./domains/components/Context/ContextObject/ContextObject";
import ThemeContextComponent from "./domains/components/Context/ContextValue/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextComponent />

      <div>
        <ContextObject />
      </div>
    </div>
  );
}

export default App;
