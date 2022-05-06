// Fetch Users
export const fetch_request = () => {
  return { type: 'users/fetch_request' }
}

export const fetch_success = (users) => {
  return { type: 'users/fetch_success', payload: users }
}

export const fetch_error = (err) => {
  return { type: 'users/fetch_error', payload: err  }
}


// Create User
export const create_request = () => {
  return { type: 'users/create_request' }
}

export const create_success = (newUser) => {
  return { type: 'users/create_success', payload: newUser }
}

export const create_error = (err) => {
  return { type: 'users/create_success', payload: err }
}


// Update User
export const update_request = () => {
  return { type: 'users/update_request' }
}

export const update_success = (newUser) => {
  return { type: 'users/update_success', payload: newUser }
}

export const update_error = (err) => {
  return { type: 'users/update_error', payload: err }
}


// Delete User
export const delete_request = () => {
  return { type: 'users/delete_request' }
}

export const delete_success = (id) => {
  return { type: 'users/delete_success', payload: id }
}

export const delete_error = (err) => {
  return { type: 'users/delete_error', payload: err }
}
