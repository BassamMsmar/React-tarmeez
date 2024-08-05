import { useState } from "react";

function MyForm() {
  const [fromInput, setFromInput] = useState({
    username: "",
    password: "",
    isStudent: false,
    globaleInfo: "",
  });
  return (
    <div>
      <label className="form-label ">User</label>
      <input
        className="form-control"
        value={fromInput.username}
        onChange={(e) =>
          setFromInput({ ...fromInput, username: e.target.value })
        }
      />

      <label className="form-label mt-3">Password</label>
      <input
        className="form-control"
        value={fromInput.password}
        onChange={(e) =>
          setFromInput({ ...fromInput, password: e.target.value })
        }
      />

      <label className="form-label mt-3">Is student</label>
      <input type="checkbox" className="d-block" checked={fromInput.isStudent} onChange={(e) => setFromInput({ ...fromInput, isStudent: e.target.checked })} />


      <label className="form-label mt-3">Globale info</label>
      <textarea
        className="form-control"
        value={fromInput.globaleInfo}
        onChange={(e) =>
          setFromInput({ ...fromInput, globaleInfo: e.target.value })
        }
      />

      <button className="btn btn-primary mt-3" type="submit" onClick={() => console.log(fromInput)}>
        Submit
      </button>

      <hr />
      <ul>
        <li>
          username: {fromInput.username}
          <br />
          password: {fromInput.password}
          <br />
          checkbox: {fromInput.checkbox}
          <br />
          globaleInfo: {fromInput.globaleInfo}
        </li>
      </ul>
    </div>
  );
}
export default MyForm;
