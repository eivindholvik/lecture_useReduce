import { useState, useReducer } from "react";
import User from "./User";

export const ACTIONS = {
  ADD_USER: "add-user",
  SHOWED_UP: "showed-up",
  DELETE_USER: "delete-user",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add-user":
      return [
        ...state,
        { userName: action.payload.userName, showed: false, id: Date.now() },
      ];
    case "showed-up":
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, showed: true };
        } else {
          return user;
        }
      });
    case "delete-user":
      return state.filter((user) => {
        if (user.id !== action.payload.id) {
          return user;
        }
      });
    default:
      throw new Error("Your action does not match any defined actions");
  }
};

function Event() {
  const [userName, setUserName] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_USER, payload: { userName: userName } });
    setUserName("");
  }

  return (
    <div className="event">
      <form method="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName((prev) => e.target.value)}
        />
        <button type="submit">register</button>
      </form>
      <div className="users">
        {state.map((user) => {
          return <User key={user.id} user={user} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default Event;
