import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/global.scss'
import Header from "../src/components/common/Header"
import Footer from "../src/components/common/Footer"
  
const ProductListing = lazy(() => import("./components/pages/ProductListing")); 
const ProductDetails = lazy(() => import("./components/pages/ProductDetails")); 

function App() { 
  return ( 
    <>
    <Header />
    <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
            <Routes> 
                <Route path="/products" element={<ProductListing />} />
                <Route path="/product/:productSKU" element={<ProductDetails />} />
            </Routes> 
        </Suspense>
    </BrowserRouter> 
    <Footer />
    </>
  ); 
} 
  
export default App;