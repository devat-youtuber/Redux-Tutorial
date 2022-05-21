import React, { useState } from 'react';
import Card from './components/Card';
import Spinner from './components/Spinner';
import Theme from './components/Theme';
import UserInput from './components/UserInput';
import userQuery from './redux/rtk-query/userQuery';
import { useSelector } from 'react-redux'


function App() {
  const [editUser, setEditUser] = useState()
  const { bgColor } = useSelector(state => state.themeState)
  // const id = '3232'

  const { 
    users, isLoading, error 
  } = userQuery.useGetUsersQuery(undefined, {
    // pollingInterval: 3000, //3000ms,
    // skip: !id,
    // refetchOnFocus: false,
    selectFromResult: (result) => {
      return {
        ...result,
        users: result.data ?? []
      }
    }
  })


  return (
    <div className="wrap" style={{background: bgColor}}>
      <Theme />
      <UserInput editUser={editUser} setEditUser={setEditUser} />
  
      { error && <span>{JSON.stringify(error)}</span> }

      <div className='card_container'>
        {
          users.map(user => (
            <React.Fragment key={user.id}>
              <Card user={user} setEditUser={setEditUser} />
            </React.Fragment>
          ))
        }
      </div>
      
      { isLoading && <Spinner /> }
    </div>
  );
}

export default App;
