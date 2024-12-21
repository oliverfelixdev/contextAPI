import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);
  console.log(users[id]);
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-900">
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* City Image */}
        <div className="flex justify-center items-center">
          <div className="w-full h-72 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={users[id].img}
              alt="not found"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="font-bold text-4xl text-blue-400">{users[id].name}</h1>
          <span className="text-xl text-gray-300">{users[id].city}</span>

          <p className="text-gray-400">
            Welcome to {users[id].city}, the city of opportunities and culture!
            Explore the vibrant streets, enjoy the local cuisine, and immerse
            yourself in the beauty of this incredible destination.
          </p>

          {/* Go Back Button */}
          <div>
            <button
              className="py-3 px-6 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => navigate(-1)}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
