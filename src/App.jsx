// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import ChangName from "./components/ChangName";
import MyForm from "./components/MyForm.jsx";
import Challengs from "./components/Challengs3.jsx";
import Lists from "./components/Lists.jsx";
import Users from "./components/Users.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <div>
      <div className="shadow-sm">
        <Header />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12  my-2">
            {/* <Content /> */}
            {/* <ChangName /> */}
            {/* <Challengs /> */}
            {/* <Lists /> */}
            {/* <Users /> */}
            {/* <ShoppingCart /> */}
            <Counter />
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
