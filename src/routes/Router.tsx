import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <FirstPage/>
    },
    {
        path:"/secondpage",
        element: <SecondPage/>
    }
])

