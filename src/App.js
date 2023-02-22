import { useState } from "react";
import "./App.css";
import InfoData from "./components/InfoData";
import UserInput from "./components/UserInput";

function App() {
  const [userData, setUserData] = useState([]);
  function handleAddUserData(user) {
    let newData = [...userData];
    newData.push(user);
    setUserData(newData);
  }
  return (
    <>
      <UserInput addUser={handleAddUserData} />
      <table>
        <tbody>
          {userData.length > 0 &&
            userData.map((user) => {
              return <InfoData key={user.id} user={user} />;
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
