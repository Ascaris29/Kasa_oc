import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error404 from './pages/404/404';
import APropos from './pages/a_propos/APropos';
import Homepage from './pages/homepage/Homepage';
import FicheLogement from './pages/logement/FicheLogement';



export const router = createBrowserRouter([
    {
        path : "/Kasa_oc",
        element : <App />,
        errorElement: <Error404 />,
        children : [
            {
                path : "/Kasa_oc",
                element : <Homepage />
            } ,
            {
                path : "/Kasa_oc/homepage",
                element : <Homepage />
            },
            {
                path: "/Kasa_oc/apropos",
                element : <APropos />
            },
            {
                path: "/Kasa_oc/logement/:idUrl",
                element : <FicheLogement />
            },
        ],
    }
])