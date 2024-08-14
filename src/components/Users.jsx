import { useState } from "react";
let userId = 3;

export default function Users() {
  // database
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Bassam",
      phone: "1234567890",
      email: "bassam@b.com",
      status: "teacher",
      country: "US",
    },
    {
      id: 2,
      name: "Ahmed",
      phone: "1234567890",
      email: "ahmed@a.com",
      status: "student",
      country: "KSA",
    },
    {
      id: 3,
      name: "Sara",
      phone: "1234567890",
      email: "sara@s.com",
      status: "teacher",
      country: "UR",
    },
  ]);

  //   add new user
  const [newUser, setNewUser] = useState({
    name: "",
    phone: "",
    email: "",
    status: "student",
    country: "KSA",
  });

  // edit & delete user
  const handelAddUser = () => {
    userId += 1;

    const newUserWithId = { ...newUser, id: userId };
    setUsers([...users, newUserWithId]);
  };

  const handelDeleteUser = (id) => {
    const newListWithOutUser = users.filter((user) => user.id !== id);
    setUsers(newListWithOutUser);
  };

  const handelEditUser = (id) => {
    const newUsersList = users.map((user) => {
      if (user.id == id) {
        user.name += " 101";
        return user;
      } else {
        return user;
      }
    });
    setUsers(newUsersList);
  };
  // setUsers.splice(index, 1);
  const listUsers = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={user.status === "teacher" ? true : false}
            readOnly
          />
        </div>
      </td>
      <td>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            checked={user.status === "student" ? true : false}
            readOnly
          />
        </div>
      </td>

      <td>{user.country}</td>
      <td>
        {/* edit button */}
        <button
          className="btn btn-primary"
          onClick={() => handelEditUser(user.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
            name="edit"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
        </button>
      </td>
      <td>
        {/* delete button */}
        <button
          className="btn btn-danger"
          onClick={() => handelDeleteUser(user.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
            name="delete"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h1 className="text-center">Users List</h1>
      <form className="container">
        <div className="row p-2">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setNewUser({ ...newUser, name: e.target.value });
              }}
              placeholder="Name"
            />
          </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              onChange={(e) => {
                setNewUser({ ...newUser, email: e.target.value });
              }}
              placeholder="Email"
            />
          </div>
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setNewUser({ ...newUser, phone: e.target.value });
              }}
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="row p-2">
          <div className="col-4">
            <label className="form-label pe-2">Teacher : </label>
            <input
              name="status"
              type="radio"
              value="teacher"
              className="form-check-input"
              checked={newUser.status == "teacher"}
              onChange={(e) => {
                setNewUser({ ...newUser, status: e.target.value });
              }}
            />
          </div>
          <div className="col-4">
            <label className="form-label pe-2">Student : </label>
            <input
              name="status"
              type="radio"
              value="student"
              className="form-check-input"
              checked={newUser.status == "student"}
              onChange={(e) => {
                setNewUser({ ...newUser, status: e.target.value });
              }}
            />
          </div>

          <div className="col-4">
            <select
              name="country"
              className="form-select"
              onChange={(e) =>
                setNewUser({ ...newUser, country: e.target.value })
              }
            >
              <option>KSA</option>
              <option>US</option>
              <option>UR</option>
              <option>RU</option>
              <option>EMU</option>
            </select>
          </div>
          <div className="row">
            <button
              type="button"
              className="btn  btn-primary m-2 w-100"
              onClick={handelAddUser}
            >
              Add
            </button>
          </div>

          <hr className="my-3" />
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Techer</th>
            <th scope="col">Student</th>
            <th scope="col">Contry</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{listUsers}</tbody>
      </table>
    </div>
  );
}
