import * as React from 'react'
//import Navbar from "./app/navbar";
import Category from "./app/category";
import BlogDetails  from './app/BlogDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return ( 
      <Router>
      {/* <Navbar />  */}
      <Routes>
        <Route path='/' element={<Category/>} />
        <Route path='/blogDetails' element={< BlogDetails/>} />
      </Routes>
    </Router>
  )
}