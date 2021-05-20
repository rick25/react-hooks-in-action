import { Fragment, useReducer } from "react";
import { bookables, sessions, days } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import reducer from "./reducer";

const initialState = {
  group: "Salones",
  bookableIndex: 0,
  hasDetails: true,
  bookables,
};
const BookablesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { group, bookableIndex, bookables, hasDetails } = state;

  const groups = [...new Set(bookables.map((b) => b.group))];
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const bookable = bookablesInGroup[bookableIndex];

  const changeGroup = (e) => {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  };

  const changeBookable = (selectedIndex) => {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  };

  const nextBookable = () => {
    dispatch({
      type: "NEXT_BOOKABLE",
    });
  };

  const toggleHasDetails = () => {
    dispatch({
      type: "TOGGLE_HAS_DETAILS",
    });
  };

  return (
    <Fragment>
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : null}>
              <button className="btn" onClick={() => changeBookable(i)}>
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <p>
          <button className="btn" onClick={nextBookable} autoFocus>
            <FaArrowRight />
            <span>Siguiente</span>
          </button>
        </p>
      </div>
      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={toggleHasDetails}
                  />
                  Mostrar Detalles
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Disponibilidad</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BookablesList;
