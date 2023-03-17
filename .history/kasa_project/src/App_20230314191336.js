import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import style from "./App.module.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className={`${style.app} d-flex flex-column`}>
        <Header />
        
        <Footer />
      </div>
  );
}

export default App;
