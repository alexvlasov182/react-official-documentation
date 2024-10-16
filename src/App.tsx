import { AuthProvider } from "./domains/components/Context/Authentication/AuthProvider";
import Login from "./domains/components/Context/Authentication/Login";
import Navbar from "./domains/components/Context/Authentication/Navbar";
import Context from "./domains/components/Context/Context/Context";
import ContextMultiple from "./domains/components/Context/ContextMultiple/ContextMultiple";
import ContextObject from "./domains/components/Context/ContextObject/ContextObject";
import ThemeContextComponent from "./domains/components/Context/ContextValue/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextComponent />

      <div>
        <ContextObject />
      </div>

      <div>
        <ContextMultiple />
      </div>

      <div>
        <Context />
      </div>

      <div>
        <AuthProvider>
          <div>
            <Navbar />
            <Login />
          </div>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
