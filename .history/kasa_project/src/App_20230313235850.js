import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={`${style.app}`}>
        <Header />
        
      </div>
    </>
  );
}

export default App;
