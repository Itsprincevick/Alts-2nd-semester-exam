
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './pages/ErrorBoundary';
import About from './pages/about';
import Home from './pages/home';
import AppOutlet from './pages/AppOutlet';
import RepoDetails from './pages/repoList';
import NotFound from './pages/errorPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
      <App />
        <Routes>
          
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/repoList" element={<AppOutlet />}>
            <Route path=":id" element={<RepoDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/ErrorBoundary" element={<ErrorBoundary />} /> 
        </Routes>
       
      </ErrorBoundary>
     
    </Router>
  </React.StrictMode>
  
);