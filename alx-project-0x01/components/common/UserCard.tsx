// components/common/UserCard.tsx

import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  address,
  website,
  company,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Username:</span> {username}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <div className="mt-4">
        <p className="font-semibold">Address:</p>
        <p className="text-gray-700">
          {address.street}, {address.suite}
          <br />
          {address.city}, {address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <p className="font-semibold">Company:</p>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-gray-600 text-sm">{company.catchPhrase}</p>
      </div>
      <div className="mt-4">
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
