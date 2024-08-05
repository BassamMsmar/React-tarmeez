import { useState } from "react";

function ChangName() {
  const [name, setName] = useState('Ahmed');
  const [showInput, setShowInput] = useState(false);

  const clearName = () => setName('');

  const handleInputChange = (e) => setName(e.target.value);

  const toggleInput = () => setShowInput(!showInput);

  return (
    <div>
      <h1>
        My name is {name}
      </h1>

      <div>
        <button className="btn btn-primary" onClick={toggleInput}>Change</button>
        <button className="btn btn-primary mx-3" onClick={clearName}>Clear</button>
      </div>

      {showInput && (
        <div>
          <label htmlFor="nameInput">Add new name</label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
}

export default ChangName;
