import Login from "./components/Login";

function App() {
  const handleLogin = (userData) => {
    console.log("Usuario logueado:", userData);
    // Aquí puedes guardar el token, redirigir, etc.
  };

  return <Login onLogin={handleLogin} />;
}

export default App;