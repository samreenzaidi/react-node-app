import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../src/components/common/Header"
import Footer from "../src/components/common/Footer"
  
const ProductList = lazy(() => import("./components/product/ProductList")); 
const ProductDetails = lazy(() => import("./components/product/ProductDetails")); 

function App() { 
  return ( 
    <>
    <Header />
    <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
            <Routes> 
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
            </Routes> 
        </Suspense>
    </BrowserRouter> 
    <Footer />
    </>
  ); 
} 
  
export default App;