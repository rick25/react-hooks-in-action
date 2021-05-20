import { Fragment, useState } from "react";
import { users } from "../../static.json";

const UserList = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [hasDetails, setHasDetails] = useState(false);
  const user = users[userIndex];

  return (
    <Fragment>
      <div>
        <ul className="users items-list-nav">
          {users.map((user, i) => (
            <li key={user.id} className={i === userIndex ? "selected" : null}>
              <button className="btn" onClick={() => setUserIndex(i)}>
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {user && (
        <div className="user-details">
          <div className="item">
            <div className="item-header">
              <h2>{user.name}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
                  />
                  Mostrar Detalles
                </label>
              </span>
            </div>
            {hasDetails && (
              <div>
                <h3>{user.title}</h3>
                <p>{user.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserList;
