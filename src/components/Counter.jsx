import {useState} from 'react'
export default function Counter() {
    const [counter, setCounter] =useState(0)
    const handelIncreaseNumber = () => {
        setCounter((c) => console.log(c) + '1')
    }
    const handelDecreaseNumber = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
      <div>
        <h1>Counter: {counter}</h1>
        <div className="btn-group w-25">
          <div className="btn btn-primary mx-2" onClick={handelIncreaseNumber}>+</div>
          <div className="btn btn-danger" onClick={handelDecreaseNumber}>-</div>
        </div>
      </div>
    </div>
  );
}
