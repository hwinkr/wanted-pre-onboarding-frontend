import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyleProvider from './styles/GlobalStyleProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyleProvider>
      <App />
    </GlobalStyleProvider>
  </React.StrictMode>,
);
