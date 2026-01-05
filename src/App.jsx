import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Products from "./components/Products";
import Services from "./components/Services";
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
