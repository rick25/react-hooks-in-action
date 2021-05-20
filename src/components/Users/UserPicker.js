import { users } from "../../static.json";

const UserPicker = () => {
  return (
    <select>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
};

export default UserPicker;
