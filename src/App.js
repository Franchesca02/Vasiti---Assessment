import Footer from "./Components/Layout/Footer/Footer";
import NavLink from "./Components/Layout/NavLinks/NavLink";
import Navbar from "./Components/Layout/Navs/Navbar";
import LandingPage from "./Pages/landing-page";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <header>
        <Navbar />
        <NavLink />
      </header>
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
