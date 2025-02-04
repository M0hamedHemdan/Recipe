import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Categorys from "./components/Categorys/Categorys.jsx";
import CounterContextProvider from "./Context/CounterContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();

function App() {
  const elements = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "category/:name", element: <Categorys /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={client}>
      <CounterContextProvider>
        <RouterProvider router={elements} />
      </CounterContextProvider>
    </QueryClientProvider>
  );
}

export default App;
