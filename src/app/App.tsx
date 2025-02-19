import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "../router/router";

const router = createBrowserRouter(Router);

const App = () => <RouterProvider router={router} />;

export default App;
