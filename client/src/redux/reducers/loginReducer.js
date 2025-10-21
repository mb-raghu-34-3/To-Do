const initialState = {
  name:'',
  email:'',
  id:null
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    case 'SIGNUP':
      return { ...state, ...action.payload };
    case 'LOGOUT':
      return { ...state, ...action.payload };
    case 'EXIST':
      return {...state, ...action.payload}
    default:
      return state;
  }
};

export default Auth;
