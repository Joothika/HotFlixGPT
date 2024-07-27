import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./utils/ExportComponents";
import { lazy, Suspense } from "react";
import store from "./store/store.js";
import { Provider } from "react-redux";
const AuthenticationPage = lazy(() => import("./Pages/AuthenticationPage.jsx"));
const DashboardPage = lazy(() => import("./utils/ExportComponents.jsx"));
const route = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={"loading.."}>
        <AuthenticationPage />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={"loading dashboard...."}>
        <DashboardPage />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route}></RouterProvider>
    </Provider>
  );
}

export default App;
