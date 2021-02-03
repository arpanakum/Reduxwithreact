import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from './actions'

function App() {

  const countState = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {countState}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
