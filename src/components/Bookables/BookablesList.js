import { Fragment, useState } from "react";
import { bookables } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const BookablesList = () => {
  const [group, setGroup] = useState("Accesorios");
  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  // const changeGroup = (event) => {
  //   setGroup(event.target.value);
  //   setBookableIndex(0);
  // };

  const nextBookable = () => {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  };

  return (
    <Fragment>
      <div>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : null}>
              <button className="btn" onClick={() => setBookableIndex(i)}>
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
    </Fragment>
  );
};

export default BookablesList;