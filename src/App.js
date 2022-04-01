import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Header from './components/Header';
import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<BookList />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
