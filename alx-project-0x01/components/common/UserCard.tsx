import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  company,
  address,
  website,
}) => {
  return (
    <div className="col-3 my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
      <p className="text-gray-600">{username}</p>
      <div className="mt-4 flex flex-col text-sm text-gray-500">
        <span>ID: {id}</span>
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
        <span>
          Company: {company.name} {company.bs} {company.catchPhrase}
        </span>
        <span>
          Address:
          {address.city} ({address.geo.lat}
          {address.geo.lng}) {address.street}
          {address.suite}
          {address.zipcode}
        </span>
        <span>
          Website:
          {website}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
