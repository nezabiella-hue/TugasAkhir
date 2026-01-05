import "./App.css";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Services from "./components/Services";
import Navbar from "./components/Navbar-TEMP";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <Projects />
        <Products />
        <Services />
      </main>

      <footer></footer>
    </>
  );
}

export default App;
