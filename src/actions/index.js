let isLoggedIn = false
export const loggingIn = (userName, password) => ({
  type: 'LOGGING',
  isLoggedIn: true,
  userName,
  password
})