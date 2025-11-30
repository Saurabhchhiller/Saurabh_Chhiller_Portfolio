import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Resume from './components/Resume';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Routing logic using Search Params or Pathname
const path = window.location.pathname;
const searchParams = new URLSearchParams(window.location.search);
const view = searchParams.get('view');

if (view === 'resume' || path === '/resume' || path === '/resume.html') {
  root.render(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}