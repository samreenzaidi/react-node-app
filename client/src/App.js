import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
  
  
function App() { 
  const headStyle = { 
    textAlign: "center", 
  } 
  return ( 
    <div> 
      <h1 style={headStyle}>Product List</h1> 
      <BrowserRouter> 
        <Routes> 
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
        </Routes> 
      </BrowserRouter> 
    </div> 
  ); 
} 
  
export default App;