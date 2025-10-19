import { createBrowserRouter, RouterProvider } from "react-router";

import { HomeLayoutPage_36, HomePage_36, BlogStaticPage_36, BlogLocalJsonPage_36, BlogNodePage_36} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_36 />,
    children: [
      {
        index: true,
        element: <HomePage_36 />,
      },
      {
        path: 'static_36',
        element: <BlogStaticPage_36 />,
      },
      {
        path: 'localjson_36',
        element: <BlogLocalJsonPage_36 />,
      },
      {
        path: 'node_36',
        element: <BlogNodePage_36 />,
      },
      
]}]
  );

const App_36 = () => {
  return <RouterProvider router={router} />;
}

export default App_36