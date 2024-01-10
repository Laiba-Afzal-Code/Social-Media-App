const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFatching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.paylord,
        isFatching: true,
        error: false,
      };
    case "LOGIN_FAILED":
      return {
        user: null,
        isFatching: false,
        error: action.paylord,
      };
      case "FOLLOW":
        return{
          ...state,
          user:{
            ...state.user,
            followings: state.user.followings.filter((followings)=> followings !==action.paylord)
          }
        }
    default:
      return state;
  }
};
export default AuthReducer;