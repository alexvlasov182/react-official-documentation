import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  name: string;
}

interface CurrentUserContext {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

type ThemeContextType = string;

const ThemeContext = createContext<ThemeContextType | null>(null);
const CurrentUserContext = createContext<CurrentUserContext | null>(null);

export default function ContextMultiple() {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <WelcomePanel />
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
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

interface PanelProps {
  title: string;
  children: ReactNode;
}

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

function WelcomePanel() {
  const currentUserContext = useContext(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error(
      "WelcomePanel must be used within a CurrentUserContext.Provider"
    );
  }

  const { currentUser } = currentUserContext;
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const currentUserContext = useContext(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error(
      "WelcomePanel must be used within a CurrentUserContext.Provider"
    );
  }

  const { currentUser } = currentUserContext;

  return <p>You logged in as {currentUser?.name}.</p>;
}

function LoginForm() {
  const currentUserContext = useContext(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error(
      "LoginForm must be used within a CurrentUserContext.Provider"
    );
  }

  const { setCurrentUser } = currentUserContext;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const canLogin = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <>
      <label>
        First name{": "}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name{": "}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + " " + lastName,
          });
        }}
      >
        Login in
      </Button>
      {!canLogin && <i>Fill in both fields </i>}
    </>
  );
}

function Panel({ title, children }: PanelProps) {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Panel must be used within a ThemeContext.Provider");
  }

  const className = "panel-" + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }: ButtonProps) {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Button must be used within a ThemeContext.Provider");
  }

  const className = "button-" + theme;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
