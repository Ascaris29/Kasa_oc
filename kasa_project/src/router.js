import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error404 from './pages/404/404';
import APropos from './pages/a_propos/APropos';
import Homepage from './pages/homepage/Homepage';
import FicheLogement from './pages/logement/FicheLogement';


//création du router et des routes
export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement: <Error404 />,
        children : [
            {
                path : "/",
                element : <Homepage />
            } ,
            {
                path: "/apropos",
                element : <APropos />
            },
            {
                path: "/logement/:idUrl",
                element : <FicheLogement />
            },
        ],
    }
])