import React from 'react'
import userQuery from '../redux/rtk-query/userQuery'

const Card = ({user, setEditUser}) => {
  const [deleteUser, { isLoading }] = userQuery.useDeleteUserMutation()


  return (
    <div className='card'>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="avatar" />
      <div className='btn_nav'>
        <button className='btn_edit'
        onClick={() => setEditUser(user)}>Edit</button>
        <button className='btn_delete' disabled={isLoading}
        onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Card