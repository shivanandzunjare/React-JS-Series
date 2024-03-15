import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";

const customRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            children: [
                {
                    path:"home",
                    element:<Home/>

                },
                {
                    path:"about",
                    element:<About/>

                },
                {
                    path:"contact",
                    element:<Contact/>
                },
                {
                    path:"/user/:userid",
                    element:<User/>
                },
                {
                    path:"github",
                    element:<Github/>
                }
            ]

        }
    ]
)

export default customRouter