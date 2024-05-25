import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PreLoader from './Components/Preloader/PreLoader';
import { hydrate, render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
// if (root.hasChildNodes()) {
//   hydrate(App, root)
// } else {
//   render(App, root)
// }

// ServiceWorker.unregister()
root.render(
  <React.StrictMode>
    <HelmetProvider>

    <App />
    </HelmetProvider>
  </React.StrictMode>
);
