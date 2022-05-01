const initialState = {
  data: [],
  loading: false,
  error: undefined
}

function userReducer(state = initialState, action){
  switch (action.type) {
    // Fetch user
    case 'users/fetch_request':
      return {
        ...state,
        loading: true
      }

    case 'users/fetch_success':
      return {
        ...state,
        loading: false,
        data: action.payload
      }

    case 'users/fetch_error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
  
    // Create user
    case 'users/create_request':
      return {
        ...state,
        loading: true
      }

    case 'users/create_success':
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data]
      }

    case 'users/create_error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    // Update user
    case 'users/update_request':
      return {
        ...state,
        loading: true
      }

    case 'users/update_success':
      return {
        ...state,
        loading: false,
        data: state.data?.map(item => 
          item.id === action.payload.id
          ? action.payload
          : item
        ),
      }

    case 'users/update_error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    // Delete user
    case 'users/delete_request':
      return {
        ...state,
        loading: true
      }

    case 'users/delete_success':
      return {
        ...state,
        loading: false,
        data: state.data?.filter(item => item.id !== action.payload),
      }

    case 'users/delete_error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }  
}

export default userReducer;