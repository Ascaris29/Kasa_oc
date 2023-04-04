import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error404 from './pages/404/404';
import APropos from './pages/a_propos/APropos';
import Homepage from './pages/homepage/Homepage';
import FicheLogement from './pages/logement/FicheLogement';



export const router = createBrowserRouter([
    {
        path : "/Kasa",
        element : <App />,
        errorElement: <Error404 />,
        children : [
            {
                path : "/Kasa",
                element : <Homepage />
            } ,
            {
                path : "/Kasa/homepage",
                element : <Homepage />
            },
            {
                path: "/Kasa/apropos",
                element : <APropos />
            },
            {
                path: "/Kasa/logement/:idUrl",
                element : <FicheLogement />
            },
        ],
    }
])