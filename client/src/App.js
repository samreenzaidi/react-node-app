import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../src/components/common/Header"
import Footer from "../src/components/common/Footer"
  
const Products = lazy(() => import("./components/product/Products")); 
const Product = lazy(() => import("./components/product/Product")); 

function App() { 
  return ( 
    <>
    <Header />
    <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
            <Routes> 
                <Route path="/products" element={<Products />} />
                <Route path="/product/:productId" element={<Product />} />
            </Routes> 
        </Suspense>
    </BrowserRouter> 
    <Footer />
    </>
  ); 
} 
  
export default App;