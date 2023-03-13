import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import style from "./App.module.scss";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
      <div className={`${style.app} d-flex flex-column`}>
        <Header />
        <Homepage />
        <Footer />
      </div>
  );
}

export default App;
