import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Component/Cart";
import CategoryDetail from "./Component/CategoryDetail";
import ShippingAddressForm from "./Component/ShippingAddressForm";
import Checkout from "./pages/Checkout";
import "./App.css";
import PaymentForm from "./pages/Payment";
import { CartProvider } from "./Component/CartContext";

const paymentOptions = {
  "client-id":
    "AdaszSg8kdpu0_0REty4SH1NXncRaWJ2EaBMf0yOoDQpVIndCk20kiDnRplDPsCGKixtwDGGr1DPgiZ4",
  Currency: "USD",
  intent: "capture",
};

const App = () => {
  return (
    <PayPalScriptProvider options={paymentOptions}>
      <BrowserRouter>
      <CartProvider>  
        <div>
          <Routes>
            <Route path="/" element={<Cart />} />
            <Route path="/product/:id" element={<CategoryDetail />} />
            <Route path="/shipping" element={<ShippingAddressForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/paymentForm" element={<PaymentForm/>} />
          </Routes>
        </div>
        </CartProvider>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
};

export default App;

