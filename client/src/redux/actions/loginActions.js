import api from './api';
export const login = (userData) => async (dispatch) => {
  try {
    const response = await api.post('/login',{...userData});
    
    dispatch({
      type: 'LOGIN',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error Login:', error);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const response = await api.post('/signup',{...userData});
    dispatch({
      type: 'SIGNUP',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error Signup:', error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: 'LOGOUT',
      payload: {name:'',email:'',id:null},
    });
  } catch (error) {
    console.error('Error logout:', error);
  }
};

