import { useState } from "react";

function MyForm() {
  const [myfromInput, setFromInput] = useState({
    username: "",
    password: "",
    isStudent: false,
    globaleInfo: "",
    country: "",
  });
  return (
    <div>
      <label className="form-label ">User</label>
      <input
        className="form-control"
        value={myfromInput.username}
        onChange={(e) =>
          setFromInput({ ...myfromInput, username: e.target.value })
        }
      />

      <label className="form-label mt-3">Password</label>
      <input
        className="form-control"
        value={myfromInput.password}
        onChange={(e) =>
          setFromInput({ ...myfromInput, password: e.target.value })
        }
      />

      <label className="form-label mt-3">Is student</label>
      <input
        type="checkbox"
        className="d-block"
        checked={myfromInput.isStudent}
        onChange={(e) =>
          setFromInput({ ...myfromInput, isStudent: e.target.checked })
        }
      />

      <label className="form-label mt-3">Globale info</label>
      <textarea
        className="form-control"
        value={myfromInput.globaleInfo}
        onChange={(e) =>
          setFromInput({ ...myfromInput, globaleInfo: e.target.value })
        }
      />

      <select
        value={myfromInput.country}
        onChange={(e) =>
          setFromInput({ ...myfromInput, country: e.target.value })
        }
      >
        <option>KSA</option>
        <option>US</option>
        <option>UR</option>
        <option>RU</option>
        <option>EMU</option>
      </select>

      <div>
        <input type="radio" />
        student
        <input type="radio" />
        tea cher
      </div>

      <button
        className="btn btn-primary mt-3"
        type="submit"
        onClick={() => console.log(myfromInput)}
      >
        Submit
      </button>

      <hr />
      <ul>
        <li>
          username: {myfromInput.username}
          <br />
          password: {myfromInput.password}
          <br />
          checkbox: {myfromInput.checkbox}
          <br />
          globaleInfo: {myfromInput.globaleInfo}
          <br />
          country: {myfromInput.country}
        </li>
      </ul>
    </div>
  );
}
export default MyForm;
