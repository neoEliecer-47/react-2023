
import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Post, { loaderPost } from "../pages/Post";
import Dashboard from "../pages/Dashboard";


export const router = createBrowserRouter([
    
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [

            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true, //cada vez que se busque la ruta raiz '/' se pintará el home (index)
                         element: <Home />,
                     },
                     {
                         path: "/about",
                         element: <About />,
                        
                     },
                     {
                        path: "/dashboard",
                        element: <LayoutPrivate />,
                        children: [
                            {
                                index: true,
                                element: <Dashboard />//rutas anidadas protegidas
                            }
                        ]

                     },
                     {
                         path: "/blog",
                         element: <Blog />,
                         loader: loaderBlog
                        
                     },
                     {
                         path: "/blog/:id",
                         element: <Post />,
                         loader: loaderPost
                    
                     }
                ]
            },
            

        ]

    },
])