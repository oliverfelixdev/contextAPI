import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users, setUsers } = useContext(UserContext);
  return (
<div className="pt-32 bg-slate-900 h-screen w-full flex flex-col items-center">
  {/* Heading */}
  <h1 className="text-4xl font-bold text-gray-50 mb-8">User List</h1>

  {/* User List Container */}
  <div className="w-full max-w-xl rounded-lg shadow-md bg-slate-800 p-6">
    <div className="flex flex-col gap-4">
      {users.map((u) => (
        <Link
          key={u.id}
          to={`/user/${u.id}`}
          className="block py-3 px-4 rounded-lg bg-slate-700 text-gray-200 font-medium hover:bg-slate-600 hover:shadow-lg transition"
        >
          {u.name}
        </Link>
      ))}
    </div>
  </div>
</div>

  );
};

export default User;
