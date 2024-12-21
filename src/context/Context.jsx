import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, name: "Ken Rosenberg", city: "Las Venturas", img: "https://danaberez.com/wp-content/uploads/2021/04/Things-to-do-in-Las-Vegas-1.jpg"},
    { id: 1, name: "Sean Johnson", city: "Los Santos", img: "https://live.staticflickr.com/5042/5295212671_edcd240099_b.jpg"},
    { id: 2, name: "Wo Zi Mu", city: "San Fierro", img: "https://img.freepik.com/premium-photo/golden-gate-bridge-san-francisco_119101-1.jpg?w=996" },
  ]);

  // console.log(props);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
