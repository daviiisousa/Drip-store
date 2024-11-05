import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./src/Pages/Home/Home";
import { Product } from "./src/Pages/Products/Product";

export const AppRoutes = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}