import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
/*import { Aboutme } from "./components/About";
import { Search } from "./components/Contactme";
import { Footer } from "./components/Footer"; */

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section>
        <Home />
      </section>
      x<section>
        <Category />
      </section>
      { /*<section>
        <Aboutme />
      </section>
      <section>
        <Search />
      </section>
      <section>
        <Footer />
      </section> */}
    </div>
  );
}

export default App;
