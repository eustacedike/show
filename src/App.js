

import './App.css';


import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from './Protected Routes/PrivateRoute';

import Loginscrn from './Auth/login';
import Layout from './Layout/layout';
import Dashboard from './Dashboard/dashboard';
import Details from './Details/details';
import ErrorPage from './Error/error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            < Route path="login" element={<Loginscrn />} />
            <Route index element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="details" element={<PrivateRoute><Details /></PrivateRoute>} />
            {/* <Route path="/details" element={<Details />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;