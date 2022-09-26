import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
/*import { Aboutme } from "./components/About";
import { Search } from "./components/Contactme";
 */

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section>
        <Home />
      </section>
      <section>
        <Category />
      </section>
      <section>
        <Footer />
      </section> 
      { /*<section>
        <Aboutme />
      </section>
      <section>
        <Search />
      </section>
      */}
    </div>
  );
}

export default App;
