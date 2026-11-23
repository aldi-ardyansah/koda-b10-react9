import { createBrowserRouter, RouterProvider } from "react-router";
import Form from "./pages/Form.jsx";
import Table from "./pages/Table.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />
  },
  {
    path: "/table",
    element: <Table />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;