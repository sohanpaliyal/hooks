import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

  import UseReducer from "./components/reducer/UseReducer.jsx";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseCustom from "./components/UseCustom";
import UseEffect from "./components/UseEffect";
import UseState from "./components/UseState";


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Router>
      
      <App/>
      
      <Routes>
        <Route path="/" element={<UseReducer/>}></Route>
        <Route path="/use-state" element={<UseState/>}></Route>
        <Route path="/use-effect" element={<UseEffect/>}></Route>
        <Route path="/use-memo" element={<UseMemo/>}></Route>
        <Route path="/use-callback" element={<UseCallback/>}></Route>
        <Route path="/use-custom" element={<UseCustom/>}></Route>
        <Route path="*" element={<Navigate to='/' replace />} ></Route>
      </Routes>
    </Router>

  // </React.StrictMode>
)
