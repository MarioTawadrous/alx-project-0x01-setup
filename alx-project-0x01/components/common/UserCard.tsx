// components/common/UserCard.tsx

import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="font-bold text-xl mb-2">{user.name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Username:</span> {user.username}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <div className="mt-4">
        <p className="font-semibold">Address:</p>
        <p className="text-gray-700">
          {user.address.street}, {user.address.suite}
          <br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Company:</p>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-gray-600 text-sm">{user.company.catchPhrase}</p>
      </div>
      <div className="mt-4">
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
