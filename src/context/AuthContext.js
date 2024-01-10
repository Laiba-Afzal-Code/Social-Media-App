import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INSHALL_STATE = {
  user: {
    _id: "659c4562df88877d1b28b674",
    username: "asoman",
    email: "asoman@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFatching: false,
  error: false,
};
export const AuthContext = createContext(INSHALL_STATE);

export const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INSHALL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFatching: state.isFatching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
