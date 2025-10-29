import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayoutPage_36,
  HomePage_36,
  BookListPage_36,
  BlogStaticPage_36,
  BlogLocalJsonPage_36,
  BlogNodePage_36,
  BlogLocalJsonPage2_36,
} from "./pages";
import BlogSupaPage_36 from "./pages/BlogSupaPage_36";


import {
  T11_ErrorExamplePage_36, T12_UseStateBasicsPage_36
}from "./pages/tutorials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_36 />,
    children: [
      { index: true, element: <HomePage_36 /> },
      { path: "booklist_36", element: <BookListPage_36 /> },
      { path: "static_36", element: <BlogStaticPage_36 /> },
      { path: "localjson_36", element: <BlogLocalJsonPage_36 /> },
      { path: "node_36", element: <BlogNodePage_36 /> },
      { path: "supa_36", element: <BlogSupaPage_36 /> },
      {path: 'localjson2_36',element: <BlogLocalJsonPage2_36 />,
      },
    ],
  },
  {
    path: "/tutorials",
    element: <HomeLayoutPage_36 />,
    children: [
      { index: true, element: <HomePage_36 /> },
      { path: "t11_36", element: <T11_ErrorExamplePage_36 /> },
      { path: "t12_36", element: <T12_UseStateBasicsPage_36 /> },
    ],
  }
]);

const App_36 = () => {
  return <RouterProvider router={router} />;
};

export default App_36;