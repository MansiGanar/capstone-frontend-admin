import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import PrivateRoute from "./shared-components/PrivateRoute/PrivateRoute";
import ScrollToTop from "./shared-components/ScrollTopTop/ScrollToTop";
import useJWTExpiry from "./hooks/useJWTExpiry";

function App() {
  const { isExpired } = useJWTExpiry();

  useEffect(() => {
    isExpired && localStorage.clear();
  }, [isExpired]);

  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <Orders />
              </PrivateRoute>
            }
          />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
