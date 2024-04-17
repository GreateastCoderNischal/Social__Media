import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global.css";
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.querySelector("#root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

)