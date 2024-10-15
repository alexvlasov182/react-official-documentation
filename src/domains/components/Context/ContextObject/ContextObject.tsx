import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  name: string;
}

interface CurrentUserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

export default function ContextObject() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider>
  );
}

function Form() {
  return (
    <Panel
      title="Updating an object via context
"
    >
      <LoginButton />
    </Panel>
  );
}

function LoginButton() {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error(
      "LoginButton must be used within a CurrentUserContext.Provider"
    );
  }

  const { currentUser, setCurrentUser } = context;

  if (currentUser != null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Oleksandr" });
      }}
    >
      Log in as your User
    </Button>
  );
}

interface PanelProps {
  title: string;
  children: ReactNode;
}

function Panel({ title, children }: PanelProps) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
