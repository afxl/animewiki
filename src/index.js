import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Body from './homepage/body';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopAnime from './pages/topAnime';
import TopManga from './pages/topManga';
import Upcoming from './pages/upcoming';
import Seasonal from './pages/seasonal';
import NoPage from './pages/NoPage';
import SearchResults from './search/searchResults';
import AnimeData from './animeInfo/animeData';
import AnimeInfo from './pages/animeInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Body />} />
        <Route exact path="top_anime" element={<TopAnime />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="TopManga" element={<TopManga />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="seasonal" element={<Seasonal />} />
        <Route path="/g/:id" element={<AnimeInfo/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
