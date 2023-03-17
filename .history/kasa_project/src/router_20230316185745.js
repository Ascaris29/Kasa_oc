import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FetchApi from './Hooks/FetchApi';
import Error404 from './pages/404/404';
import APropos from './pages/a_propos/APropos';
import Homepage from './pages/homepage/Homepage';
import Caroussel from './pages/logement/components/caroussel/Caroussel';
import FicheLogement from './pages/logement/FicheLogement';


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
                path : "/homepage",
                element : <Homepage />
            },
            {
                path: "/apropos",
                element : <APropos />
            },
            {
                path: "/logement/:id",
                element : <FicheLogement />
            },
            {
                path: "/essai",
                element: <FetchApi />
            }
        ],
    }
])