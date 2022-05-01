import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as userAPI from './api/userAPI'
import Card from './components/Card';
import Spinner from './components/Spinner';
import UserInput from './components/UserInput';

function App() {
  const [editUser, setEditUser] = useState()

  const {
    data: users, loading, error
  } = useSelector(state => state.userState)
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch({type: `users/fetch_request`})

    userAPI.getUsers()
    .then(data => {
      dispatch({ type: 'users/fetch_success', payload: data })
    })
    .catch(err => {
      dispatch({ type: 'users/fetch_error', payload: err })
    })
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
