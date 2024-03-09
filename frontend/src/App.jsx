import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import CreateBook from "./pages/CreateBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="https://book-mern-sahilgupta.vercel.app/" element={<Home />} />
      <Route path="https://book-mern-sahilgupta.vercel.app/books/create" element={<CreateBook />} />
      <Route path="https://book-mern-sahilgupta.vercel.app/books/details/:id" element={<ShowBook />} />
      <Route path="https://book-mern-sahilgupta.vercel.app/books/edit/:id" element={<EditBook />} />
      <Route path="https://book-mern-sahilgupta.vercel.app/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};


export default App
