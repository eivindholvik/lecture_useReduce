import { ACTIONS } from "./Event";

function User({ user, dispatch }) {
  console.log("hei");
  return (
    <div className="user" style={{ color: user.showed ? "red" : "lightgrey" }}>
      <span>{user.userName}</span>
      <button
        className="showed"
        onClick={() =>
          dispatch({ type: ACTIONS.SHOWED_UP, payload: { id: user.id } })
        }
      >
        showed up
      </button>
      <button
        className="delete"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_USER, payload: { id: user.id } })
        }
      >
        delete
      </button>
    </div>
  );
}

export default User;
