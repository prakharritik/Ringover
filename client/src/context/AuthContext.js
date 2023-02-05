import createDataContext from "./createDataContext";

import axios from "axios";
import setAuthToken from "../setAuthToken";
import { useNavigate } from "react-router-dom";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "load_user":
      return { ...state, user: action.payload };

    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "", user: null };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password, name }) => {
    try {
      const response = await axios.post("/api/users", {
        email,
        password,
        name,
      });
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      loadUser(dispatch);
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup.",
      });
    }
  };
};

const loadUser = async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(localStorage.token);
  try {
    const res = await axios.get("/api/auth");
    console.log(res.data);
    dispatch({
      type: "load_user",
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong.",
    });
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin",
        payload: response.data.token,
      });
      loadUser(dispatch);
      console.log("hi");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin.",
      });
    }
  };
};

const tryLocalSignin = (dispatch) => async () => {
  const token = localStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
  } else {
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signout = (dispatch) => async () => {
  localStorage.removeItem("token");
  dispatch({ type: "signout" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "", user: null }
);
