import About from "./pages/about/about";
import Article from "./pages/article/article";
import Course from "./pages/course/course";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Panel from "./pages/panel/panel";
import Setting from "./pages/Setting";
import PrivateRoute from "./components/PrivateRoute"


const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    {
      path: "/article/*",
      element: <Article />,
      children: [
        { path: "php", element: <h2>php article</h2> },
        { path: "javascript", element: <h2>javascript article</h2> },
        { path: "react", element: <h2>react article</h2> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/panel", element: <PrivateRoute> <Panel /> </PrivateRoute>  },
    { path: "/course/:courseId", element: <Course /> },
    { path: "/setting", element: <PrivateRoute> <Setting /> </PrivateRoute> }

];
export default routes;