import App from '../src/App';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "homepage",
                element : <Homepage />
            }  
        ],
        {
            
        }
    }
])