import "./App.css";
import { User } from "./User";

// if else
// const age = 15;
// if (age >= 18) {
//   console.log("Umur Kurang");
// } else {
//   console.log("Cukup umur");
// }

// ternary

// age >= 18 ? console.log("Umur Kurang") : console.log("Cukup umur");

function App() {
  const age = 25;
  const isGreen = false;
  const names = ["Pedro", "Jesica", "Paul", "Mike", "Dustin"];
  const users = [
    { name: "John", age: 25 },
    { name: "Doe", age: 35 },
    { name: "Paul", age: 40 },
  ];

  return (
    <div className="App">
      {/* <User name="Pedro" age={23} email="pedro@gmail.com" />
      <User name="Pedro" age={22} email="pedro@gmail.com" />
    <User name="Pedro" age={20} email="pedro@gmail.com" /> */}
      {/* {age >= 30 ? "Over Age" : "Cukup umur"}
      <h1 style={{ color: isGreen ? "red" : "blue" }}>This has color</h1> */}
      {/* <h1>{names[1]}</h1> */}
      {/* {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })} */}
      {/* {users.map((user) => {
        return (
          <div key={user.id}>
            <User name={user.name} age={user.age} />
          </div>
        );
      })} */}
    </div>
  );
}

// // javascript functions
// const getName = () => {
//   return "Pedro";
// };

// // react components
// const GetNameComponent = () => {
//   return <h3>Pedro</h3>;
// };

// const User = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//       <h2>{props.email}</h2>
//     </div>
//   );
// };

export default App;
