import React, { useEffect, useState } from 'react'
import userQuery, { userSelector } from '../redux/rtk-query/userQuery'
import { useSelector } from 'react-redux'


const UserInput = ({editUser, setEditUser}) => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  const [createUser, { isLoading: createLoading }] = userQuery.useCreateUserMutation()
  
  const [updateUser, { isLoading: updateLoading }] = userQuery.useUdapteUserMutation()

  // const userSelector = userQuery.endpoints.getUsers.select()
  const users = useSelector(state => userSelector(state))

  console.log(users)

  useEffect(() => {
    if(editUser){
      setName(editUser.name)
      setAvatar(editUser.avatar)
    }
  }, [editUser])
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdAt = new Date().toISOString();
    
    if(editUser){
      updateUser({...editUser, name, avatar})
    }else{
      createUser({name, avatar, createdAt})
    }

    setEditUser(undefined)
    setName('')
    setAvatar('')
  }

  return (
    <form className="user_input" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" required value={name}
        onChange={e => setName(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="avatar">Avatar</label>
        <input type="text" required value={avatar}
        onChange={e => setAvatar(e.target.value)} />
      </div>

      <button type="submit" disabled={createLoading || updateLoading}>
        { editUser ? 'Update' : 'Add' }
      </button>
    </form>
  )
}

export default UserInput