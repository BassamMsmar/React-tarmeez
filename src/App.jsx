// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Content from "./components/content.jsx";

function App() {
  return (
    <>
      <Header />
      

      <div className="container">
        <div className="row">
          <div className="col-8 border">
            <Content />
          </div>

          <div className="col-4 border bg-light">
            <Sidebar />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
