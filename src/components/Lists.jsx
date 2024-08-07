import { useState } from "react";
export default function Lists() {
  const [NewValueDevise, setAddNewDevise] = useState("");
  const [devises, setDevises] = useState([
    "Apple",
    "Samsung",
    "Xiaomi",
    "Huawei",
  ]);
  const ListDevises = devises.map((devise, index) => <li key={index}>{devise}</li>);

  function AddNewDevise() {
    setDevises([...devises, NewValueDevise]);
  }

  return (
    <div>
      <h1>List of devises</h1>
      <ul>{ListDevises}</ul>
      <label htmlFor="">
        <span> Enter new Devise: </span>
        <input
          type="text"
          value={NewValueDevise}
          onChange={(e) => setAddNewDevise(e.target.value)}
        />
        <button onClick={AddNewDevise}>Add</button>
      </label>
    </div>
  );
}
