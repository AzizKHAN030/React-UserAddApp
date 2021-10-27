import React from "react";
import "./index.scss";
import "materialize-css";
import AppContext from "./context";

import Home from "./pages/Home";
import axios from "axios";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        localStorage.setItem("users", JSON.stringify(data));
        setUsers(JSON.parse(localStorage.getItem("users")));
      } catch (error) {
        alert("error!!");
        console.log(error);
      }
    }
    if (!JSON.parse(localStorage.getItem("users"))) {
      fetchData();
    } else {
      setUsers(JSON.parse(localStorage.getItem("users")));
    }
  }, []);

  return (
    <>
      <AppContext.Provider value={{ users, setUsers }}>
        <Home users={users} />
      </AppContext.Provider>
    </>
  );
}
export default App;
