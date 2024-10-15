import { createContext, ReactNode, useContext, useState } from "react";

const ThemeContext = createContext<string | null>(null);

export default function ThemeContextComponent() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

interface PanelProps {
  title: string;
  children: ReactNode;
}

function Form() {
  return (
    <Panel title="Updating a value via context">
      <Button>Sign up</Button>
      <Button>Login in</Button>
    </Panel>
  );
}

function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
