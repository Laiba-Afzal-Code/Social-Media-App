import axios from "axios";
export const loginCall = async (userCredantionals, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", userCredantionals);
    dispatch({ type: "LOGIN_SUCCESS", paylord: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILED", paylord: error });
  }
};
