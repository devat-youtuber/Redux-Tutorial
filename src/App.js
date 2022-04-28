import { useState, useEffect } from 'react';
import './App.css';
import { store } from './redux/store'


function App() {
  const [state, setState] = useState(() => store.getState())

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setState(state)
    })
  },[])

  const handleUpdateName = () => {
    const action = { type: 'update_name', name: 'DevAT'}
    store.dispatch(action)
  }

  const handleUpdateAge = () => {
    const action = { type: 'update_age', age: 31 }
    store.dispatch(action)
  }

  return (
    <div className="App">
      <h2>{state.nameState.name}</h2>
      <h3>{state.ageState.age}</h3>
      <button onClick={handleUpdateName}>Update Name</button>
      <button onClick={handleUpdateAge}>Update Age</button>
    </div>
  );
}

export default App;
