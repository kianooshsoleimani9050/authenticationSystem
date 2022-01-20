import Navbar from "./components/common/layout/Navbar";
import RoutesList from "./components/routes/RoutesList";
import RouteWrapper from "./components/routes/RouteWrapper";
import AuthenticationProvider from "./context/AuthenticationProvider";

function App() {
  return (
    <AuthenticationProvider>
      <RouteWrapper>
        <Navbar />
        <RoutesList />
      </RouteWrapper>
    </AuthenticationProvider>
  );
}

export default App;
