import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { PublicLayout } from "./layout/publicLayout";
import Home from "./pages/Home";
import MonitoHorariosTabla from "./components/MonitoHorariosTabla";
import CriminalProfile from "./components/CriminalProfile"; // Asegúrate de importar CriminalProfile

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "monitoHorariosTabla",
        element: <MonitoHorariosTabla />,
      },
      {
        path: "criminalProfile",
        element: <CriminalProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
