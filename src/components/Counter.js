import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch =useDispatch();
  const counter =useSelector(state=>state.counter);
  const show =useSelector(state=>state.showCounter);
  const increamentHandler =()=>{
    dispatch({type:'increment'})
  }
  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }
  const increaseHandler=()=>{
    dispatch({type:'increase',amount:5})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;