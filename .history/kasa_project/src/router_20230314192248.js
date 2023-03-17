import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/homepage/Homepage';


export const router = createBrowserRouter([
    {
        path : ‘"/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <Homepage />
            }  
        ],
    }
])