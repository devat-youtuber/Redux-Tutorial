import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from './components/Card';
import Spinner from './components/Spinner';
import UserInput from './components/UserInput';
import { getUsers } from './redux/toolkits/userSlice';

function App() {
  const [editUser, setEditUser] = useState()

  const {
    data: users, loading, error
  } = useSelector(state => state.userState)
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <div className="wrap">
      <UserInput editUser={editUser} setEditUser={setEditUser} />
  
      { error && <span>{error.message}</span> }

      <div className='card_container'>
        {
          users.map(user => (
            <React.Fragment key={user.id}>
              <Card user={user} setEditUser={setEditUser} />
            </React.Fragment>
          ))
        }
      </div>
      
      { loading && <Spinner /> }
    </div>
  );
}

export default App;
