import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
/* main */
function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      <User></User>
      {/*  <Counter></Counter> */}
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Userss</h1>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div style={{ border: "2px solid red", margin: "30px" }}>
      <h2>Name :{props.name}</h2>
      <h2>Email :{props.email}</h2>
    </div>
  );
}

function Counter() {
  const [Count, setCont] = useState(55);
  const increaseCount = () => setCont(Count + 1);
  const decreaseCount = () => setCont(Count - 1);
  /*  const increaseCount = () => {
      const newValue = Count+1;
      setCount(newValue);
 } */
  return (
    <div>
      <h1>Count:{Count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Increase</button>
    </div>
  );
}

export default App;
