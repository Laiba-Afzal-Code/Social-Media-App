export const Loginstart = (userData)=>({
type: "LOGIN_START",
});
export const Loginsuccess = (user)=>({
type: "LOGIN_SUCCESS",
payloard: user,
});
export const Loginfail = (error)=>({
type: "LOGIN_FAILED",
payloard: error,
});
export const Follow =(userId)=>({
    type: "FOLLOW",
    payloard: userId,
});
export const UnFollow =(userId)=>({
    type: "UNFOLLOW",
    payloard: userId,
})