// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Content from "./components/content.jsx";
import ChangName from "./components/ChangName";
import MyForm from "./components/MyForm.jsx";
import Challengs from "./components/Challengs3.jsx";
import Lists from "./components/Lists.jsx";
import Users from "./components/Users.jsx";

function App() {
  return (
    <div>
      <div className="shadow-sm">
        <Header />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-8  my-2">
            {/* <Content /> */}
            {/* <ChangName /> */}
            {/* <Challengs /> */}
            {/* <Lists /> */}
            <Users />
          </div>

          {/* <div className="col-4  bg-light my-3">
            <Sidebar />
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default App;
