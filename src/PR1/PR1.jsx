import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import "./App.css";

export default function Main() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
