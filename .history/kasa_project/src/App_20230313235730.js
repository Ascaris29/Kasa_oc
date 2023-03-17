import Header from "./components/header/Header";
import style from "./App.module.scss";

function App() {
  return (
    <div className={`${style.app}`}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
