import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HomePage from './components/HomePage'
import ToDoApp from './components/ToDo';

function App() {
  const auth = useSelector(state => state.auth)  
  const [user,setUser] = useState(false)

  useEffect(() => {
    if(auth.name){
      setUser(true)
    }else{
      setUser(false)
    }
  }, [auth]);

  if(user){
    return (
      <ToDoApp/>
    );
  }else{
    return(
     <HomePage/>
    )
  }
}

export default App;
