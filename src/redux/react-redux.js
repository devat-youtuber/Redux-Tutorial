import React, { useState, useEffect, useContext } from 'react'

const Context = React.createContext()

export const Provider = ({store, children}) => {

  Context.displayName = "React-Redux"
  return(
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
}


export const useSelector = (selector) => {
  const store = useContext(Context)
  const [state, setState] = useState(() => selector(store.getState()))

  useEffect(() => {
    const unsubcribe = store.subscribe(() => {
      setState(() => selector(store.getState()))
    })

    return () => unsubcribe;
  }, [store, selector])

  return state;
}

export const useDispatch = () => {
  const { dispatch } = useContext(Context)
  return dispatch;
}