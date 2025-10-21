import api from './api';

export const fetchTodos = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/todos?userId=${id}`);
    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todatData) => async (dispatch) => {
  try {
    const response = await api.post('/todos', { ...todatData });
    dispatch({
      type: 'ADD_TODO',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const editTodo = (id, text) => async (dispatch) => {
  try {
    const response = await api.put(`/todos/${id}`, { text });
    dispatch({
      type: 'EDIT_TODO',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error editing todo:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.delete(`/todos/${id}`);
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};

export const toggleTodo = ({todoId:id, completed}) => async (dispatch) => {
  try {
    const response = await api.patch(`/todos/${id}/toggle`,{completed});
    dispatch({
      type: 'TOGGLE_TODO',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
};
