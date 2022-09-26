import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
import { Subscribe } from "./components/Subscribe";
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
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section> 
      { /*
      <section>
        <Search />
      </section>
      */}
    </div>
  );
}

export default App;
