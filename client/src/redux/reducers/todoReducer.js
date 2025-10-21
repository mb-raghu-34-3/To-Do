const initialState = {
  todos: [ ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':

      return { ...state, todos: [ ...action.payload] };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, ...action.payload] };

    case 'EDIT_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload[0].id ? action.payload[0] : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
