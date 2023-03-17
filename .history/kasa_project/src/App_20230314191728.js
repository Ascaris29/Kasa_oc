import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import style from "./App.module.scss";
import Homepage from "./pages/homepage/Homepage";
import { Outlet } from "react-router-dom";

function App() {
  return (
      <div className={`${style.app} d-flex flex-column`}>
        <Header />
        <div>
        <Outlet />
        </div>
        <Footer />
      </div>
  );
}

export default App;
