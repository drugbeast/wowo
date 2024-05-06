export function useAuth() {
  const user = JSON.parse(localStorage.getItem("user"))
  return {
    isAuth: user,
    user
  }
}