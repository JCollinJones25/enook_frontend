import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./sass/main.scss";
import "./sass/sidebar.scss";
import "./sass/library.scss";
import "./sass/show.scss";
import "./sass/spinner.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
