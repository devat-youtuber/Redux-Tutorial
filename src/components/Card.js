import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/thunks/userThunk'

const Card = ({user, setEditUser}) => {
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
   dispatch(deleteUser(id))
  }


  return (
    <div className='card'>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt="avatar" />
      <div className='btn_nav'>
        <button className='btn_edit'
        onClick={() => setEditUser(user)}>Edit</button>
        <button className='btn_delete'
        onClick={() => handleDelete(user.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Card