import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { ClearNumber, DecrementNumber, IncrementNumber } from './actions';
import UserList from './USERS/Users';
function App() {
  const dispatch = useDispatch()
  const myState = useSelector((state) => state.ChangeTheNumber )
  return (
    <div className="App">
      <h1>Home Page</h1>
      <UserList/>
      {/* <h3>Count:{myState}</h3>
      <button onClick={() => dispatch(IncrementNumber())}>Increment(+)</button>
      <button onClick={() => dispatch(DecrementNumber())}>Decrement(-)</button>
      <button onClick={() => dispatch(ClearNumber())}>ClearCount</button> */}

    </div>
  );
}

export default App;
