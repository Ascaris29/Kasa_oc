import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import APropos from './pages/a_propos/APropos';
import Homepage from './pages/homepage/Homepage';


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement: <404
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
            }
        ],
    }
])