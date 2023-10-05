import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layout';


const App = ()=>{
  const pageSize = 9;
  const routes = [
    { path: '/', element: <Layout pageSize={pageSize} country={"in"} category={"general"} /> },
    { path: '/business', element: <Layout pageSize={pageSize} country={"in"} category={"business"} /> },
    { path: '/entertainment', element: <Layout pageSize={pageSize} country={"in"} category={"entertainment"} /> },
    { path: '/health', element: <Layout  pageSize={pageSize} country={"in"} category={"health"} /> },
    { path: '/science', element: <Layout pageSize={pageSize} country={"in"} category={"science"} /> },
    { path: '/sports', element: <Layout pageSize={pageSize} country={"in"} category={"sports"} /> },
    { path: '/technology', element: <Layout pageSize={pageSize} country={"in"} category={"technology"} /> },
  ];

    return (
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} exact path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    )
  }
export default App;
