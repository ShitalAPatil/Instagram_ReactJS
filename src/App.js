import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import Homepage from './components/HomePage';
import ItemDetail from './components/ItemDetail';
// import store from './store'

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
  
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/item/:id" element={<ItemDetail/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;