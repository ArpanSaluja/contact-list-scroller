const initialState = {
    isLoggedIn: false,  
}
const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGGING':
          console.log('Inside Logging ', action);
        return {
          ...state,
            isLoggedIn: action.isLoggedIn,
            userName: action.userName,
            password: action.password
        }
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos