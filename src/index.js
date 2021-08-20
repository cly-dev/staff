import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./public/scss/media.scss";
import {HashRouter as Router } from "react-router-dom";
import App from "./App";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor} from "./redux/store";
ReactDOM.render(
    <PersistGate persistor={persistor}>
    <Router>
    <App />
    </Router>
    </PersistGate>,
    document.getElementById('root')
);

